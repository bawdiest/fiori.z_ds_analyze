/*
 * Copyright (C) 2009-2017 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/generic/app/navigation/service/NavigationHandler", "sap/zen/dsh/Dsh"], function (U, N, D) {
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
				url = "hallo";
				d = new D({
					height: "100%",
					width: "100%",
					deployment: "bw",
					dshAppName: t,
					repoPath: url,
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