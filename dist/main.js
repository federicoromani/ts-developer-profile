define("developer/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("developer/layers/Backend", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("developer/layers/Frontend", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("developer/index.", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("developer/profiles", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Profiles = void 0;
    var Profiles;
    (function (Profiles) {
        class JuniorBackend {
            constructor(seniority, techstack) {
                this.seniority = seniority;
                this.techstack = techstack;
            }
            getProfile() {
                return {
                    description: `Desarrollador Backend, ${this.seniority.category}.`,
                    techstack: this.techstack,
                    seniority: this.seniority
                };
            }
        }
        Profiles.JuniorBackend = JuniorBackend;
        class JuniorFrontend {
            constructor(seniority, techstack) {
                this.seniority = seniority;
                this.techstack = techstack;
            }
            getProfile() {
                return {
                    description: `Desarrollador Frontend, ${this.seniority.category}.`,
                    techstack: this.techstack,
                    seniority: this.seniority
                };
            }
        }
        Profiles.JuniorFrontend = JuniorFrontend;
        class SemiseniorBackend {
            constructor(seniority, techstack) {
                this.seniority = seniority;
                this.techstack = techstack;
            }
            getProfile() {
                return {
                    description: `Desarrollador Backend, ${this.seniority.category}.`,
                    techstack: this.techstack,
                    seniority: this.seniority
                };
            }
        }
        Profiles.SemiseniorBackend = SemiseniorBackend;
        class SemiseniorFrontend {
            constructor(seniority, techstack) {
                this.seniority = seniority;
                this.techstack = techstack;
            }
            getProfile() {
                return {
                    description: `Desarrollador Frontend, ${this.seniority.category}.`,
                    techstack: this.techstack,
                    seniority: this.seniority
                };
            }
        }
        Profiles.SemiseniorFrontend = SemiseniorFrontend;
        class SeniorBackend {
            constructor(seniority, techstack) {
                this.seniority = seniority;
                this.techstack = techstack;
            }
            getProfile() {
                return {
                    description: `Desarrollador Backend, ${this.seniority.category}.`,
                    techstack: this.techstack,
                    seniority: this.seniority
                };
            }
        }
        Profiles.SeniorBackend = SeniorBackend;
        class SeniorFrontend {
            constructor(seniority, techstack) {
                this.seniority = seniority;
                this.techstack = techstack;
            }
            getProfile() {
                return {
                    description: `Desarrollador Frontend, ${this.seniority.category}.`,
                    techstack: this.techstack,
                    seniority: this.seniority
                };
            }
        }
        Profiles.SeniorFrontend = SeniorFrontend;
    })(Profiles = exports.Profiles || (exports.Profiles = {}));
});
define("developer/seniority/Junior", ["require", "exports", "developer/profiles"], function (require, exports, profiles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Junior = void 0;
    class Junior {
        createBackend(techstack) {
            return new profiles_1.Profiles.JuniorBackend(Junior.seniority, techstack);
        }
        createFrontend(techstack) {
            return new profiles_1.Profiles.JuniorFrontend(Junior.seniority, techstack);
        }
    }
    exports.Junior = Junior;
    Junior.seniority = {
        experience: '1-2 years',
        category: 'JN'
    };
});
define("developer/seniority/Semisenior", ["require", "exports", "developer/profiles"], function (require, exports, profiles_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Semisenior = void 0;
    class Semisenior {
        createBackend(techstack) {
            return new profiles_2.Profiles.SemiseniorBackend(Semisenior.seniority, techstack);
        }
        createFrontend(techstack) {
            return new profiles_2.Profiles.SemiseniorFrontend(Semisenior.seniority, techstack);
        }
    }
    exports.Semisenior = Semisenior;
    Semisenior.seniority = {
        experience: '2-6 years',
        category: 'SSR'
    };
});
define("developer/seniority/Senior", ["require", "exports", "developer/profiles"], function (require, exports, profiles_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Senior = void 0;
    class Senior {
        createBackend(techstack) {
            return new profiles_3.Profiles.SeniorBackend(Senior.seniority, techstack);
        }
        createFrontend(techstack) {
            return new profiles_3.Profiles.SeniorFrontend(Senior.seniority, techstack);
        }
    }
    exports.Senior = Senior;
    Senior.seniority = {
        experience: '+6 years',
        category: 'SR'
    };
});
define("app", ["require", "exports", "developer/seniority/Junior", "developer/seniority/Semisenior", "developer/seniority/Senior"], function (require, exports, Junior_1, Semisenior_1, Senior_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recruiterIT(developer) {
        const backendProfile = developer.createBackend(['PHP Laravel', 'Node', 'MySQL']);
        const frontendProfile = developer.createFrontend(['ES6', 'VueJS', 'TailwindCSS']);
        console.log(backendProfile.getProfile());
        console.log(frontendProfile.getProfile());
        return [backendProfile.getProfile(), frontendProfile.getProfile()];
    }
    console.log('Probando la creación un nuevo perfil Junior...');
    const JN = recruiterIT(new Junior_1.Junior());
    localStorage.setItem('JN', JSON.stringify(JN));
    console.log('Probando la creación un nuevo perfil Semisenior...');
    const SSR = recruiterIT(new Semisenior_1.Semisenior());
    localStorage.setItem('SSR', JSON.stringify(SSR));
    console.log('Probando la creación un nuevo perfil Senior...');
    const SR = recruiterIT(new Senior_1.Senior());
    localStorage.setItem('SR', JSON.stringify(SR));
});
//# sourceMappingURL=main.js.map