describe('Los estudiantes under monkeys', function () {
    it('visits los estudiantes and survives monkeys', function () {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomEvent(monkeysLeft) {
    var vMethod = getRandomInt(1, 5);
    switch (vMethod) {
        case 1:
            randomLinkClick(monkeysLeft);
            break;
        case 2:
            randomFillText(monkeysLeft);
            break;
        case 3:
            randomSelectItem(monkeysLeft);
            break;
        case 4:
            randomButtonClick(monkeysLeft);
            break;
    }
}

function randomLinkClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if (!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({ force: true });
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomEvent(monkeysLeft);
        });
    }
}

function randomFillText(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        cy.get('input').then($input => {
            var randomInput = $input.get(getRandomInt(0, $input.length));
            if (!Cypress.dom.isHidden(randomInput)) {
                cy.wrap(randomInput).type('Hello World');
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomEvent(monkeysLeft);
        });
    }
}

function randomSelectItem(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        cy.get('select').then($select => {
            var randomSelect = $select.get(getRandomInt(0, $select.length));
            if (!Cypress.dom.isHidden(randomSelect) && $select.length > 0) {
                cy.wrap(randomSelect).find('option')
                    .then($els => $els.get(1).setAttribute('selected', "selected"))
                    .parent()
                    .trigger('change')
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomEvent(monkeysLeft);
        });
    }
}

function randomButtonClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        cy.get('button').then($button => {
            var randomButton = $button.get(getRandomInt(0, $button.length));
            if (!Cypress.dom.isHidden(randomButton)) {
                cy.wrap(randomButton).click({ force: true });
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomEvent(monkeysLeft);
        });
    }
}