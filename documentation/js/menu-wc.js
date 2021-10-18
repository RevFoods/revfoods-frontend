'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">revfoods-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' : 'data-target="#xs-components-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' :
                                            'id="xs-components-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' }>
                                            <li class="link">
                                                <a href="components/AcceptedOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AcceptedOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddChefComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddChefComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddFoodCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFoodCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddFoodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFoodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSupervisorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSupervisorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChefDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChefDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChefSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChefSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerHelpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerHelpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageChefComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageChefComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageFoodCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageFoodCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageFoodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageFoodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageSupervisorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageSupervisorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderCancellationRequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderCancellationRequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PendingBillsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PendingBillsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RevfoodsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RevfoodsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServedOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServedOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupervisorDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupervisorDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupervisorSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupervisorSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateChefComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateChefComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateFoodCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateFoodCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateFoodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateFoodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateSupervisorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateSupervisorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewCustomerOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewCustomerOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewFoodCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewFoodCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewUnoccupiedTablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewUnoccupiedTablesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' : 'data-target="#xs-injectables-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' :
                                        'id="xs-injectables-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChefService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChefService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CustomerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CustomerTableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerTableService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FeedbackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FoodCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodCategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FoodOrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodOrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FoodService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderStatusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderStatusService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupervisorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupervisorService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' : 'data-target="#xs-pipes-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' :
                                            'id="xs-pipes-links-module-AppModule-f4444ca2fd26bddb47508f45c13a3aa9"' }>
                                            <li class="link">
                                                <a href="pipes/FoodStatusPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodStatusPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TotalFoodOrderPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalFoodOrderPricePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/Chef.html" data-type="entity-link" >Chef</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerTable.html" data-type="entity-link" >CustomerTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feedback.html" data-type="entity-link" >Feedback</a>
                            </li>
                            <li class="link">
                                <a href="classes/Food.html" data-type="entity-link" >Food</a>
                            </li>
                            <li class="link">
                                <a href="classes/FoodCategory.html" data-type="entity-link" >FoodCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/FoodOrder.html" data-type="entity-link" >FoodOrder</a>
                            </li>
                            <li class="link">
                                <a href="classes/Help.html" data-type="entity-link" >Help</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderStatus.html" data-type="entity-link" >OrderStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/Supervisor.html" data-type="entity-link" >Supervisor</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChefService.html" data-type="entity-link" >ChefService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerTableService.html" data-type="entity-link" >CustomerTableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeedbackService.html" data-type="entity-link" >FeedbackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodCategoryService.html" data-type="entity-link" >FoodCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodOrderService.html" data-type="entity-link" >FoodOrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodService.html" data-type="entity-link" >FoodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelpService.html" data-type="entity-link" >HelpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderStatusService.html" data-type="entity-link" >OrderStatusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupervisorService.html" data-type="entity-link" >SupervisorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});