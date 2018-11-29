/*
 * Copyright (C) 2009-2017 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.predefine('z/acc/query/analyze/Component', ["sap/ui/core/UIComponent", "sap/ui/generic/app/navigation/service/NavigationHandler",
	"sap/zen/dsh/Dsh"
], function (U, N, D) {
	"use strict";
	return U.extend("z.acc.query.analyze.Component", {
		metadata: {
			manifest: "json"
		},
		createContent: function () {
			function r() {
				return {
					'CompanyCode': ['2O0COMP_CODE', '/ERP/COMPCODE'],
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

			function a(M, V, s) {
				if (Array.isArray(M)) {
					for (var e in M) {
						V[M[e]] = s;
					}
				} else {
					V[M] = s;
				}
			}
			var t = "Z_ANALYSIS_01";
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters.XTEMPLATE) {
				t = this.getComponentData().startupParameters.XTEMPLATE[0];
			}
			var q = "";
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters.XQUERY) {
				q = this.getComponentData().startupParameters.XQUERY[0];
			}
			var b = "";
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters.XBOOKMARKID) {
				b = this.getComponentData().startupParameters.XBOOKMARKID[0];
			}
			var v = "";
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters.XVISIBLEPROMPTS) {
				v = this.getComponentData().startupParameters.XVISIBLEPROMPTS[0];
			}
			var T = "";
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters.XSYSTEM) {
				T = this.getComponentData().startupParameters.XSYSTEM[0];
			}
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters["sap-system"]) {
				T = this.getComponentData().startupParameters["sap-system"][0];
			}
			var n = "";
			if (this.getComponentData().startupParameters && this.getComponentData().startupParameters.XSEMANTIC_OBJECTS) {
				n = this.getComponentData().startupParameters.XSEMANTIC_OBJECTS[0].split(',');
			}
			var d = null;
			var c = false;
			var f = {};
			var m = r();
			var R = {};
			if (q.startsWith('2C')) {
				m = {};
				R = null;
			}
			if (!jQuery.isEmptyObject(m)) {
				for (var k in m) {
					if (m.hasOwnProperty(k)) {
						a(m[k], R, k);
					}
				}
			}

			function i() {
				var url = sap.ui.resource("z.acc.query.analyze", "applications/").toString();
				d = new D({
					height: "100%",
					width: "100%",
					deployment: "bw",
					repoPath: url,
					//repoPath: "https://s41709em.sap-cc.com/sap/bc/ui5_ui5/sap/z_ds_analyze/applications/",
					//repoPath: sap.ui.resource("z.acc.query.analyze", "applications/").absoluteTo(window.location.pathname).toString(),
					dshAppName: t,
					semanticMappings: m,
					appComponent: this,
					systemAlias: T,
					deferCreation: c
				});
				if (q) {
					d.addParameter("XQUERY", q);
				}
				if (b) {
					d.addParameter("XBOOKMARKID", b);
				}
				if (v) {
					d.addParameter("XVISIBLEPROMPTS", v);
				}
				if (n) {
					d.addParameter("NAV_SOURCES", JSON.stringify(n));
				}
				if (R) {
					d.addParameter("NAV_SEMANTIC_MAPPINGS", JSON.stringify(R));
				}
			}
			var A = {};
			var g = this;
			var h = new N(this);
			var p = h.parseNavigation();
			p.done(function (j, u, s) {
				if (!d) {
					i.call(g);
				}
				if (s !== sap.ui.generic.app.navigation.service.NavType.initial) {
					if (j && j.bNavSelVarHasDefaultsOnly) {
						d.addParameter("XPROMPT", "true");
					}
					if (typeof d.initializeAppStateData !== "function") {
						A._sData = j.selectionVariant;
						A.getData = function () {
							var o = undefined;
							if (this._sData === undefined || this._sData === "") {
								return undefined;
							}
							try {
								o = JSON.parse(this._sData);
							} catch (e) {}
							return {
								"selectionVariant": o
							};
						};
					}
				}
				if (typeof d.initializeAppStateData === "function") {
					d.initializeAppStateData.call(d, j, f);
				} else {
					d.initializeAppState.call(d, A, f);
				}
				if (c) {
					d.createPage();
				}
			});
			p.fail(function (e) {
				if (!d) {
					c = true;
					i.call(g);
				}
				if (g.getComponentData().startupParameters) {
					var P = null;
					for (var j in g.getComponentData().startupParameters) {
						if (j != "XTEMPLATE" && j != "XSEMANTIC_OBJECTS" && j != "XQUERY" && j != "XBOOKMARKID" && j != "XVISIBLEPROMPTS" && j !=
							"XSYSTEM" && g.getComponentData().startupParameters.hasOwnProperty(j)) {
							P = g.getComponentData().startupParameters[j][0];
							d.addParameter(j, P);
							if (m && m.hasOwnProperty(j)) {
								a(m[j], f, P);
							} else {
								f[j] = P;
							}
						}
					}
				}
				sap.ushell.Container.getService("CrossApplicationNavigation").getStartupAppState(g).always(function (s) {
					d.initializeAppState.call(d, s, f);
					d.createPage();
				});
			});
			if (!d) {
				c = true;
				i.call(g);
			}
			return d;
		},
		init: function () {
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		}
	});
});
jQuery.sap.registerPreloadedModules({
	"name": "z/acc/query/analyze/Component-preload",
	"version": "2.0",
	"modules": {
		"z/acc/query/analyze/i18n/i18n.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ar.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_bg.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ca.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_cs.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_da.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_de.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_el.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_en.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_en_US_sappsd.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=[[[\\u010E\\u0113\\u015F\\u012F\\u011F\\u014B \\u015C\\u0163\\u0171\\u018C\\u012F\\u014F\\u2219\\u2219\\u2219\\u2219\\u2219\\u2219]]]\n',
		"z/acc/query/analyze/i18n/i18n_en_US_saptrc.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=BMRrFblW0RhA8EsL9QkTnA_Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_es.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_et.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_fi.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_fr.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_hi.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=\\u0921\\u093F\\u091C\\u093C\\u093E\\u0907\\u0928 \\u0938\\u094D\\u091F\\u0942\\u0921\\u093F\\u092F\\u094B\n',
		"z/acc/query/analyze/i18n/i18n_hr.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_hu.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_it.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_iw.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ja.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_kk.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ko.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_lt.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Dizaino studija\n',
		"z/acc/query/analyze/i18n/i18n_lv.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ms.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_nl.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_no.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_pl.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_pt.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ro.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_ru.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_sh.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_sk.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_sl.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_sv.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_th.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_tr.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_uk.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_vi.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_zh_CN.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/i18n/i18n_zh_TW.properties": '#\n#Thu Aug 24 09:44:35 UTC 2017\nDS_TITLE=Design Studio\n',
		"z/acc/query/analyze/manifest.json": '{\n\t"_version": "1.4.0",\n\t"sap.app": {\n\t\t"_version": "1.2.0",\n\t\t"id": "z.acc.query.analyze",\n\t\t"type": "application",\n\t\t"i18n": "i18n/i18n.properties",\n\t\t"title": "{{DS_TITLE}}",\n\t\t"ach": "FIN-FIO-CLM",\n\t\t"dataSources": {\t\n\t\t},\t\t\n\t\t"resources": "resources.json",\n\t\t"applicationVersion": {\n\t\t\t"version": "5.0.8"\n\t\t}\n\t},\n\t"sap.ui": {\n\t\t"_version": "1.1.0",\n\t\t"technology": "UI5",\n\t\t"deviceTypes": {\n\t\t\t"desktop": true,\n\t\t\t"tablet": false,\n\t\t\t"phone": false\n\t\t},\n\t\t"supportedThemes": [\n\t\t\t"sap_hcb",\n\t\t\t"sap_bluecrystal"\n\t\t]\n\t},\n\t"sap.ui5": {\n\t\t"_version": "1.1.0",\n\t\t"dependencies": {\n\t\t\t"minUI5Version": "1.48.4",\n\t\t\t"libs": {\n\t\t\t\t"sap.m": {},\n\t\t\t\t"sap.viz": {},\n\t\t\t\t"sap.ui.generic.app": {},\n\t\t\t\t"sap.zen.dsh": {},\n\t\t\t\t"sap.zen.commons": {},\n\t\t\t\t"sap.zen.crosstab": {}\n\t\t\t\t},\n\t\t\t"components": {}\n\t\t},\n\t\t"config": {\n\t\t\t"fullWidth": true\n\t\t},\n\t\t"models": {\n\t\t\t"i18n": {\n\t\t\t\t"type": "sap.ui.model.resource.ResourceModel",\n\t\t\t\t"settings": {\n\t\t\t\t\t"bundleName": "z.acc.query.analyze.i18n.i18n"\n\t\t\t\t}\n\t\t\t}\n\t\t},\t\t\n\t\t"routing": {\n\t\t\t"config": {\n                "viewType": "XML",\n                "viewPath": "z.acc.query.analyze.view",\n                "targetControl": "fioriContent",\n                "targetAggregation": "pages",\n                "clearTarget": false\n\t\t\t},\n\t\t\t"routes": []\n\t\t},\n\t\t"contentDensities": {\n\t\t\t"compact": true,\n\t\t\t"cozy": true\n\t\t},\n\t\t"services": {\n\t\t\t"ShellUIService": {\n\t\t    \t"factoryName": "sap.ushell.ui5service.ShellUIService"\n\t\t\t}\n\t\t}\t\t\t\n\t},\n\t"sap.platform.abap": {\n\t\t"_version": "1.1.0",\n\t\t"uri": "/sap/bc/ui5_ui5/sap/fin_ds_analyze"\n\t},\n\t"sap.fiori": {\n\t\t"_version": "1.1.0",\n\t\t"registrationIds": [ "F1035" ],\n\t\t"archeType": "reusecomponent"\n\t}\n}'
	}
});