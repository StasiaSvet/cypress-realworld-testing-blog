/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       *  Window object with additional properties used during test.
       */
      window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>
  
      getAllPosts(dataTestAttribute: string): Chainable<Element>
      getFirstPost(dataTestAttribute: string): Chainable<Element>
      getBySel(dataTestAttribute: string, args?: any): Chainable<Element>
      getBySelLike(
        dataTestPrefixAttribute: string,
        args?: any
      ): Chainable<Element>
    }
  }
  