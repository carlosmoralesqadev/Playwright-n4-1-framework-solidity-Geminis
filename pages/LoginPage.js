import { expect   } from "@playwright/test";
import { Locators } from "../data/data.js";
import { BasePage } from "../pages/base/BasePage.js"

export class LoginPage extends BasePage {
    /** @param {import ('@playwright/test').Page} page */
    constructor(page){
        super(page)

        this.userInput = page.getByRole( "textbox", { name : Locators.login.inputs.userInput } );
        this.passInput = page.getByRole( "textbox", { name : Locators.login.inputs.passInput } );
        this.btnLogin  = page.getByRole( "button" , { name : Locators.login.inputs.btnLogin  } );

        this.titleText = Locators.inventory.titleText


        this.msgErrorOne   = page.getByRole( "heading" , { name : Locators.login.messages.msgErrorUno   });
        this.msgErrorTwo   = page.getByRole( "heading" , { name : Locators.login.messages.msgErrorTwo   });
        this.msgErrorThree = page.getByRole( "heading" , { name : Locators.login.messages.msgErrorThree });
    }



    async hacerLogin( {user = "" , pass = "" , tipo = ""} = {} ) {
        await this.completarFormLogin(user, pass);
        if(tipo === true){
            await this.resultLoginExitoso();
        }else if(tipo === false){
            await this.resultLoginFailed();
        }else if(tipo === ""){
            console.log("------->>>--->>>>>>> Te falto pasar el tipo de login");
        }
    }



    
    async completarFormLogin(user ="", pass=""){
        await this.userInput.fill(user);
        await this.passInput.fill(pass);
        await this.btnLogin.click();
    };

    async resultLoginExitoso(){
        await expect(this.thisTitle).toBeVisible();
        await expect(this.thisTitle).toContainText(this.titleText);
        await expect(this.btnLogin).not.toBeVisible();
    };

    async resultLoginFailed(){
        const anyError = this.msgErrorOne.or(this.msgErrorTwo).or(this.msgErrorThree);
        await expect(anyError).toBeVisible();
    };






}