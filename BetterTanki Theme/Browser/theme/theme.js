class HTML {

    static findElementByDataset(type, property, value) {
        const elements = document.querySelectorAll(type)

        for (let i = 0; i < elements.length; i++) {

            const element = elements[i]

            if (element.dataset[property] == value) {
                return element;
            }
        }

    }

    static findElementByAttribute(type, property, value) {
        var elements = document.querySelectorAll(type)

        for (let i = 0; i < elements.length; i++) {

            var element = elements[i]

            if (element.attribute[property] == value)
                return element;
        }
    }

    static findElementByChildProperty(type, key, property, value) {
        var elements = document.querySelectorAll(type)

        for (let i = 0; i < elements.length; i++) {

            var element = elements[i]

            for (let j = 0; j < element.children.length; j++) {
                var child = element[j]

                if (element.children.length) {
                    if (child[key][property] == value)
                        return element;

                }
            }

        }
    }

    static convertToCss(css, selector) {
        if (css && selector) {
            var selectorType, selectorValue
            selector.includes('.') ? selectorType = '.' : selectorType = '#'
            return `
        ${selector.type + selector.value}  {
        ${css}
        }
        `
        }

        return ''
    }

    static #createElementWithOptions(type, options) {

        var init = type && options ? true : false

        if (init) {}
    }

    static find(type, options) {

        switch (options.by) {

        case 'data':
            return this.findElementByDataset(type, options.property, options.value);
            break;
        case 'attribute':
            return this.findElementByAttribute(type, options.property, options.value);
            break;
        case 'child':
            return this.findElementByChildProperty(type, options.key, options.property, options.value);

        }
    }

    static create = function(type, options) {

        return type && options ? this.#createElementWithOptions(type, options) : null
    }

    static addStyle(styleString) {
        const style = document.createElement('style');
        style.innerHTML = styleString;
        document.head.appendChild(style)
        return style;
    }

}

class Details {

    static background = {

        // #06090e (black color) can be switched to rgba(0, 0, 0, 0.8) to make it transparent. \\
        // rgba(6, 9, 14, 0.69) \\ // #292929 \\

        commonContainer: 'radial-gradient(50% 100% at 50% 100%, #06090e, #06090e, #06090e)',
        battleList: '#06090e',
        parkourConfirmation: 'rgba(0, 0, 0, 0.8)',
        popupCard: 'transparent',
        battleMenu: '#06090e',
        tankWaitingBox: '#06090e',
        <!--playerMenu: '#06090e',
        playerMenu: 'rgba(0, 0, 0, 0.8)',
        <!--bluePlayers: '#030311',
        <!--redPlayers: '#160000',
        buyMoreContainer: 'brown',
        generalChat: 'rgba(0, 0, 0, 0.8)',
        rewardPreview: 'rgba(0, 0, 0, 0.8)',
        clanView: 'radial-gradient(#292929, #292929)',
        proTypeSelection: 'transparent',
        proModeSelection: '#06090e',
        createBattle: '#06090e',
        proModeCreate: '#580001',
        createBattleEnlarged: '#6b009d69',
        news: 'border-box',
        newsInnerBox: 'rgba(0, 0, 0, 0.8)',
        loadingScreen: '#0000008a',
        enterScreen: '#0000008a',
        emptyBattleSlot: '#292929',
        autoPause: 'rgba(0, 0, 0, 0.59)',
        <!--settingsContainer: 'radial-gradient(#221717, #5a115e45)',
        loginForm: 'radial-gradient(farthest-side at 60% 55%, #292929, rgba(0, 0, 0, 0.8))',
        leaveBattleButton: 'rgb(160 32 32)',

        //
        propertyName: 'background',

    };

    static borderRadius = {
        parkourConfirmation: '10px',
        battleMenu: '10px',
        battleMenuItems: '0.388em',
        tankWaitingBox: '0.488em',
        leaveBattleButton: '0.388em',
        playerMenu: '10px',
        otherPlayerTableItem: '10px',
        myTableItem: '10px',
        rewardPreview: '10px',
        proTypeSelection: '10px',
        proModeSelection: '10px',
        newsInnerBox: '10px',
        autoPause: '10px',
        loginForm: '10px',

        //
        propertyName: 'border-radius'
    };

    static boxShadow = {

        proTypeSelection: '0px 0px 2px white',

        propertyName: 'box-shadow',
    };
    static minWidth = {
        battleMenu: '10em',

        //
        propertyName: 'min-width'
    };

    static outline = {
        buyMoreContainer: '1px solid brown',
        proTypeSelection: '-1px 1px 7px white',

        propertyName: 'outline',
    };
    static width = {
        tankWaitingBox: '93%',
        propertyName: 'width',
        createBattle: '6.1em',
        createBattleEnlarged: '22.6em',
        proModeCreate: '22.8em',

        propertyName: 'width',
    };
    static classNames = {

        commonContainer: '.jhvmvA,.cpIhDm,.dKcbgr,.TGSZV,.hkgpCw,.cUXgen,.hTnFdj,.iJrqPp,.OFYUV',
        popupCard: '.cHWQGs',
        battleList: '.eQIdEy',
        parkourConfirmation: '.bOComm',
        battleMenu: '.hsDbCm',
        battleMenuItems: '.kEHGcw',
        tankWaitingBox: '.bVKdVw',
        leaveBattleButton: '.bsWSmO',
        // sc-bwzfXH jaGvxJ - for error \\
        // sc-bwzfXH jKmoYC \\
        playerMenu: '.jKmoYC,.bHjjiZ,.kfZaLl,.gwmqnr,.kdmmCD,.fybSCP,.djTscU,.gWrnYE,.gZZHbL,.evoMzZ,.bvAXpP,.ePpXaj,.eShhug,.leseTv,.haQZA,.eNTjZS,.sKMQl,.cWYmda,.efgIeu,.hiobyH,.iWeHVD,.jwIPgL,.fLYqzA,.eQefek,.blZitN',
        redPlayers: '.dJcmtF',
        bluePlayers: '.gJOHtR',
        otherPlayerTableItem: '.fqvYOx',
        myTableItem: '.knTkoA',
        buyMoreContainer: '.bjgcek,.grXQxd',
        generalChat: '.eVpBab',
        rewardPreview: '.lhjXuY',
        clanView: '.iAkjQm',
        proTypeSelection: '.jdlZDR',
        proModeSelection: '.gEIuxp',
        createBattle: '.hgbMQJ',
        createBattleEnlarged: '.xWodt',
        proModeCreate: '.rUamI',
        news: '.dsItLK',
        newsInnerBox: '.kBGkBc',
        loadingScreen: '.Yfwvt',
        enterScreen: '.liPcsK',
        emptyBattleSlot: '.AKhpB',
        autoPause: '.bTaEno',
        joinA: '.hyaCSf',
        joinB: '.kBXDvK',
        checkboxChecked: '.bCVAbE, .kvTmWg',
        checkboxUnchecked: '.knLUAV,.dSzBwx',
        settingsContainer: '.ezpZWY',
        loginForm: '.fyHuHX,.cYOoGI'

    };

    static getClassName(key) {

        return this.classNames[key];
    }

}

//

class ThemeChanger {

    static enableDarkMode() {
        const container = GameElements.getCommonContainer();
        if (!container)
            return;
        const className = container.classList[1];
        HTML.addStyle(`.${className}{background:black}`)

    }

    static manualString() {
return `
        .GlobalStyle-html, .GlobalStyle-body {
         background:#06090e;
        }
        ${Details.classNames.playerMenu} > tbody[0]{
        background:#28083f
        }

        ${Details.classNames.playerMenu} > tbody[1]{
        background:#28083f;
        }

        .gOEOMi{
        visibility:hidden;
        }

        ${Details.classNames.checkboxChecked} {
        background:#06090e;
        width:3.75em;
        }

         .bCVAbE:before, ${Details.classNames.checkboxChecked}:before {
         border-radius:15px;
         left:2.5em;

         }

         ${Details.classNames.checkboxUnchecked} {
         width:3.75em;
         background:rgb(26 17 17 / 25%);
         }
         .knLUAV:before,${Details.classNames.checkboxUnchecked}:before {
         border-radius:15px;
         left:0.05em;

         }

         .ibYVzf,.hcypUA  {
         padding-left:1.9em;
         }

         .stibK  {
         backdrop-filter:blur(100px);
         }

         .modal.hover {
         backdrop-filter:blur(0.5px);
         }



        `
    }

    static getMainStyleString() {
        var main = '';
        var f = []

        for (let i in Details) {

            if (Details[i]?.propertyName) {
                var curr = '';
                const propertyObj = Details[i];
                const type = propertyObj.propertyName;
                for (let j in propertyObj) {
                    if (j !== 'propertyName') {
                        const className = Details.getClassName(j);
                        const value = propertyObj[j]
                        curr += `${className}{${type}:${value} !important;}  `;
                        f.push(document.querySelector(className))
                    }

                }
                main += curr;
            }
        }
        //console.log(f)

        return main
    }

    static setStaticStyles() {

        const mainStyles = this.getMainStyleString();
        const manualSet = this.manualString();
        const merge = mainStyles + manualSet;
        return HTML.addStyle(merge);
    }

}

let counter = 0;
const main = ()=>{
    if (counter == 10) {
        clearInterval(mainInterval)
    }
    counter += 1
    ThemeChanger.setStaticStyles();
}

const mainInterval = setInterval(main, 50);
