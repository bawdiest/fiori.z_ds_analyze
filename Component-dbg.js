/*
 * Copyright (C) 2009-2017 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
               "sap/ui/core/UIComponent",
               "sap/ui/generic/app/navigation/service/NavigationHandler",
               "sap/zen/dsh/Dsh"
               ], function (UIComponent, NavigationHandler, Dsh) {
	"use strict";

	return UIComponent.extend("z.acc.query.analyze.Component", {

		metadata : {
			manifest : "json"
		},

		/**
		 * Initialize the application
		 * @returns {sap.ui.core.Control} the content
		 */
		createContent : function() {
	
			function readMappingTable() {
				return { 	'CompanyCode': ['2O0COMP_CODE', '/ERP/COMPCODE'],
					        'PayingCompanyCode': '/ERP/PAYCMPCD',
							'FinancialAccountType': '2O0ACCT_TYPE', 
							'AccountingDocumentType': '2O0AC_DOC_TYP', 
							'Ledger': ['2O0AC_LEDGER', '/ERP/LEDGER'], 
							'FixedAsset': '2O0ASSET', 
							'MasterFixedAssed': '2O0ASSET_MAIN', 
							'BusinessArea': ['2O0BUS_AREA', '/ERP/BUSAREA'], 
							'ChartOfAccounts': ['2O0CHRT_ACCTS', '/ERP/CHRTACCT'],
							'Company': '2O0COMPANY',
							'InternalOrder': ['2O0COORDER', '/ERP/COORDER'], 
							'PartnerOrder': '/ERP/PCOORDER', 
							'CostCenter': ['2O0COSTCENTER', '/ERP/COSTCNTR'], 
							'PartnerCostCenter': '/ERP/PCOSTCTR', 
							'CostElement': '2O0COSTELMNT', 
							'ControllingArea': ['2O0CO_AREA', '/ERP/CO_AREA'], 
							'Customer': ['2O0CUSTOMER', '/ERP/CUSTOMER'], 
							'FunctionalArea': ['2O0FUNC_AREA', '/ERP/FUNCAREA'],
							'PartnerFunctionalArea': '/ERP/PFUNAREA', 
							'GLAccount': ['2O0GL_ACCOUNT', '/ERP/GL_ACCT'],
							'LedgerGroup': '2O0GL_LDGRP',
							'Plant': '2O0PLANT', 
							'ProfitCenter': ['2O0PROFIT_CTR', '/ERP/PROFTCTR'], 
							'PartnerProfitCenter': '/ERP/PPROFCTR', 
							'Segment': ['2O0SEGMENT', '/ERP/SEGMENT'], 
							'Supplier': ['2O0VENDOR', '/ERP/VENDOR'], 
							'CostObject': '2O0COSTOBJ', 
							'Country': ['2O0COUNTRY', '/ERP/COUNTRY'], 
							'Region': '2O0REGION', 
							'ClearingStatus': '2O0GL_CLRSTAT', 
							'FinancialStatementItem': '2O0GL_FSITEM', 
							'FinancialStatementType': '2O0GL_FSTYPE', 
							'FinancialStatementVariant': '2O0GL_FSVERSN', 			         
							'Material': '2O0MATERIAL', 
							'MovementType': '2O0MOVE_TYPE',
							'PaymentMethod': '2O0PYMT_METH', 
							'StatisticalKeyFigure': '2O0STKEYFIG', 
							'Version': '2O0VERSION',
							'WBSElement': ['2O0WBS_ELEMT', '/ERP/WBSELMT'], 
							'PartnerWBSElement': '/ERP/PWBSELMT',
							'ActivityType': ['2O0ACTTYPE', '/ERP/ACTTYPE', '0ACTTYPE'],
							'Currency': ['2O0CURRENCY', '0CURRENCY'],
							'Project': ['2O0PROJECT', '/ERP/PROJECT'],
							'PartnerProject': '/ERP/PPROJECT',
							'Day': ['2O0CALDAY', '0CALDAY'], 
							'Year': ['2O0CALYEAR', '0CALYEAR'],
							'YearQuarter': ['2O0CALQUARTER', '0CALQUARTER'],
							'YearMonth': ['2O0CALMONTH', '0CALMONTH'], 
							'YearWeek': ['2O0CALWEEK', '0CALWEEK'],
							'PostingPeriod': ['2O0FISCPER3', '0FISCPER3'],
							'ReportingCurrency_E': '/ERP/CUR_AGG',
							'ExchangeRateType': '/ERP/EX_RATE',				         
							'CashInOutIndicator': '/ERP/LFIOIND', 
							'LiquidityItemName': ['/ERP/LQITEM', '/ERP/LQI_CP'], 
							'OrganizationUnitName': '/ERP/ORG_UNIT', 
							'TargetCurrency': '/ERP/TCUR',
							'TimeDimension': '/ERP/TD_TYPE',
							'TimeDimensionLength': '/ERP/TD_LENTH', 
							'FiscalYear': '0FISCYEAR', 
							'FiscalYearVariant': '0FISCVARNT', 
							'ConversionPartnerName': '/ERP/TDP_CC',
							'VersionMonthName': '/ERP/VMONTH', 
							'Bank': '/ERP/BANKL',
							'BankAccount': '/ERP/ACC_ID',
							'BankAccountNumber': '/ERP/ACC_NUM',
							'BankAccountCurrency': '/ERP/ACC_CUR',
							'BusinessPartner': '/ERP/BP',
							'SalesOrder': '/ERP/SALESORD'
				};
			}
			
			function addMappedValuesToObject(oMapping, oValueHolder, sValue) {
				//Mapping could be an array.  In this case, we must add a value for each individual InfoObject that is mapped from the Semantic Object.
				//Non-present InfoObjects will be ignored by the DS runtime.
				if (Array.isArray(oMapping)) {
					for (var entry in oMapping) {
						oValueHolder[oMapping[entry]] = sValue;
					}
				}else{
					oValueHolder[oMapping] = sValue;
				}
			}
		
			var sTemplate = "0TEMPLATE_1"; 
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters.XTEMPLATE){
				sTemplate = this.getComponentData().startupParameters.XTEMPLATE[0];			
			}
			var sQuery = ""; 
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters.XQUERY){
				sQuery = this.getComponentData().startupParameters.XQUERY[0];			
			}
			var sBookmarkid = ""; 
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters.XBOOKMARKID){
				sBookmarkid = this.getComponentData().startupParameters.XBOOKMARKID[0];			
			}
			var sVisiblePrompts = ""; 
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters.XVISIBLEPROMPTS){
				sVisiblePrompts = this.getComponentData().startupParameters.XVISIBLEPROMPTS[0];			
			}
			var sTargetSystemAlias = "";
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters.XSYSTEM){
				sTargetSystemAlias = this.getComponentData().startupParameters.XSYSTEM[0];			
			}
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters["sap-system"]){
				sTargetSystemAlias = this.getComponentData().startupParameters["sap-system"][0];				
			}
			var aNavigationSourceObjects = "";
			if(this.getComponentData().startupParameters && this.getComponentData().startupParameters.XSEMANTIC_OBJECTS){
				aNavigationSourceObjects = this.getComponentData().startupParameters.XSEMANTIC_OBJECTS[0].split(',');
			}
			
			var oDesignStudio = null;
			var bDeferCreation = false;
			var aNavParams = {};
			var aMappings = readMappingTable();
			var aReversedMappings = {};
			if (sQuery.startsWith('2C')){	//CDS query
				aMappings = {};
				aReversedMappings = null;
			}
			if (!jQuery.isEmptyObject(aMappings)) {
				for (var key in aMappings) {
					if (aMappings.hasOwnProperty(key)) {
						addMappedValuesToObject(aMappings[key], aReversedMappings, key);				}
				}
			}		
	
			function initializeDesignStudio() {
				oDesignStudio = new Dsh({
			      height: "100%",
			      width: "100%",
			      deployment: "bw",
			      dshAppName: sTemplate,
			      semanticMappings: aMappings,
			      appComponent: this,
			      systemAlias: sTargetSystemAlias,
			      deferCreation: bDeferCreation
				});  				
				if (sQuery) {  //Query
					oDesignStudio.addParameter("XQUERY", sQuery);
				}		
				if (sBookmarkid) {  //Bookmark
					oDesignStudio.addParameter("XBOOKMARKID", sBookmarkid);
				}				
				if (sVisiblePrompts) {  //Visible Prompts
					oDesignStudio.addParameter("XVISIBLEPROMPTS", sVisiblePrompts);
				}				
				if (aNavigationSourceObjects) {  //Semantic Objects for Navigation
					oDesignStudio.addParameter("NAV_SOURCES", JSON.stringify(aNavigationSourceObjects));
				}				
				if (aReversedMappings) {  //Reversed Mappings
					oDesignStudio.addParameter("NAV_SEMANTIC_MAPPINGS", JSON.stringify(aReversedMappings));
				}				
			}
			
			var oAppState = {};
			var that = this;
			var oNavigationHandler = new NavigationHandler(this);		
			var oParseNavigationPromise = oNavigationHandler.parseNavigation();			
			
			oParseNavigationPromise.done(function(oAppData, oURLParameters, sNavType){	
				if(!oDesignStudio){
					initializeDesignStudio.call(that);
				}
				if (sNavType !== sap.ui.generic.app.navigation.service.NavType.initial) {
					if (oAppData && oAppData.bNavSelVarHasDefaultsOnly){
						oDesignStudio.addParameter("XPROMPT", "true");
					}
					if(typeof oDesignStudio.initializeAppStateData !== "function"){
						oAppState._sData = oAppData.selectionVariant;
						oAppState.getData = function(){
							var o = undefined;
							if (this._sData === undefined || this._sData === ""){
								return undefined;
							}
							try{
								o=JSON.parse(this._sData);
							}catch(e){}
							return {"selectionVariant": o};
						};					
					}
				}
				if(typeof oDesignStudio.initializeAppStateData === "function"){
					oDesignStudio.initializeAppStateData.call(oDesignStudio, oAppData, aNavParams);
				}
				else{
					oDesignStudio.initializeAppState.call(oDesignStudio, oAppState, aNavParams);	
				}
				if(bDeferCreation){
					oDesignStudio.createPage();
				}
			});
			
			oParseNavigationPromise.fail(function(oError){					
				if(!oDesignStudio){
					bDeferCreation = true;
					initializeDesignStudio.call(that);
				}				
		        if (that.getComponentData().startupParameters) {
					var sParamValue = null;
					for (var param in that.getComponentData().startupParameters) {
						if (param != "XTEMPLATE" && param != "XSEMANTIC_OBJECTS" && param != "XQUERY" && param != "XBOOKMARKID" &&
							param != "XVISIBLEPROMPTS" && 	param != "XSYSTEM" && that.getComponentData().startupParameters.hasOwnProperty(param)) {
							sParamValue = that.getComponentData().startupParameters[param][0];
							oDesignStudio.addParameter(param, sParamValue);
							if(aMappings && aMappings.hasOwnProperty(param)) {
								addMappedValuesToObject(aMappings[param], aNavParams, sParamValue);
							}else{
								aNavParams[param] = sParamValue;
							}							
						}
					}
				}
				sap.ushell.Container.getService("CrossApplicationNavigation").getStartupAppState(that).always(function(oStartupData) {
					oDesignStudio.initializeAppState.call(oDesignStudio, oStartupData, aNavParams);
					oDesignStudio.createPage();
				});					        
			});			
			
			if(!oDesignStudio){
				bDeferCreation = true;
				initializeDesignStudio.call(that);
			}
			return oDesignStudio;  
		},
	
	    init : function() {
	        sap.ui.core.UIComponent.prototype.init.apply(this, arguments); // calls createContent (among others)				   	
	    }

	});
});