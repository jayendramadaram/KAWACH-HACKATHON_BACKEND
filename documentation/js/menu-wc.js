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
                    <a href="index.html" data-type="index-link">crudapp documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                            'data-target="#controllers-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' : 'data-target="#xs-controllers-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' :
                                            'id="xs-controllers-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' : 'data-target="#xs-injectables-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' :
                                        'id="xs-injectables-links-module-AppModule-7d68453e7208311f4938345438c936211e7ec31e4c07b5c80db59a3f951aaad6b05c34708ed609b1a3b3ded4e46a65ac89d86366bbafb238c441e54720f4cbe5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' : 'data-target="#xs-controllers-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' :
                                            'id="xs-controllers-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' : 'data-target="#xs-injectables-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' :
                                        'id="xs-injectables-links-module-AuthModule-d9193567eb76419d016aa3963e1baa7edbce4ad404a2c7ad4b6076ec20b9cd212a4a17263bf9ad61b4dd66a29e3991458304902641780ecc2d7d02054f476275"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OtpModule.html" data-type="entity-link" >OtpModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OtpModule-6a6d9eb51429f76c02d7fc88b015d3adf70ea9c3917d0246c2cd971ff20b5c718e9479e8d16256d118a01188efecab69c6580e17bd55b5d445e4bd5c6ee2426c"' : 'data-target="#xs-injectables-links-module-OtpModule-6a6d9eb51429f76c02d7fc88b015d3adf70ea9c3917d0246c2cd971ff20b5c718e9479e8d16256d118a01188efecab69c6580e17bd55b5d445e4bd5c6ee2426c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OtpModule-6a6d9eb51429f76c02d7fc88b015d3adf70ea9c3917d0246c2cd971ff20b5c718e9479e8d16256d118a01188efecab69c6580e17bd55b5d445e4bd5c6ee2426c"' :
                                        'id="xs-injectables-links-module-OtpModule-6a6d9eb51429f76c02d7fc88b015d3adf70ea9c3917d0246c2cd971ff20b5c718e9479e8d16256d118a01188efecab69c6580e17bd55b5d445e4bd5c6ee2426c"' }>
                                        <li class="link">
                                            <a href="injectables/OtpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtpService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' : 'data-target="#xs-injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' :
                                        'id="xs-injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' : 'data-target="#xs-controllers-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' :
                                            'id="xs-controllers-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' : 'data-target="#xs-injectables-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' :
                                        'id="xs-injectables-links-module-UserModule-4863e2e571dd3ac1222856b4aaebb7587bd097c6f16758b13f7f2aae1ee5ce6bb219ae29e8e66e43fb4699edfe4a6ad056d03385e8035d654b2f49f3090bccd8"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
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
                                <a href="classes/AuthLogin.html" data-type="entity-link" >AuthLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSignup.html" data-type="entity-link" >AuthSignup</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUser.html" data-type="entity-link" >EditUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Phnum.html" data-type="entity-link" >Phnum</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogRequest.html" data-type="entity-link" >LogRequest</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OtpService.html" data-type="entity-link" >OtpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthRequest.html" data-type="entity-link" >AuthRequest</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
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