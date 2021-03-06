import {ElementFinder, Ptor} from 'protractor';
import {Protractor} from '../../core/protractor/Protractor';
import {HeaderBlock} from '../blocks/header/HeaderBlock';
import {PageAsserts} from '../../asserts/PageAsserts';

export abstract class BasePage extends Protractor {

    public readonly header: HeaderBlock;
    public readonly asserts: PageAsserts;

    public readonly baseUrl: string;

    protected constructor(protractor: Ptor, rootEl: ElementFinder, public readonly url: string) {
        super(protractor, rootEl);
        this.baseUrl = this.protractor.browser.baseUrl;
        this.header = new HeaderBlock(this.protractor);
        this.asserts = new PageAsserts(this);
    }

    public open(url = this.url) {
        return this.browser.get(url);
    }

    public getCurrentUrl() {
        return this.browser.getCurrentUrl();
    }
}
