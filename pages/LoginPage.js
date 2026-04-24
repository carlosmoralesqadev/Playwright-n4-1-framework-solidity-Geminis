import { expect   } from "@playwright/test";
import { Locators } from "../data/data.js";
import { BasePage } from "../pages/base/BasePage.js"

export class LoginPage extends BasePage {
    /** @param {import ('@playwright/test').Page} page */
    constructor(page){
        super(page)
        this.userInput = page.getByRole( "textbox", { name : Locators.login.userInput } );
        this.passInput = page.getByRole( "textbox", { name : Locators.login.passInput } );
        this.btnLogin  = page.getByRole( "button" , { name : Locators.login.btnLogin  } );
        this.thisTitle = page.getByTestId(Locators.inventory.title)
        this.titleText = Locators.inventory.titleText
        this.msgErrorOne   = page.getByRole( "heading" , { name : Locators.login.msgErrorUno   });
        this.msgErrorTwo   = page.getByRole( "heading" , { name : Locators.login.msgErrorTwo   });
        this.msgErrorThree = page.getByRole( "heading" , { name : Locators.login.msgErrorThree });
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