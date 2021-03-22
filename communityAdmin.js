/// <reference types="cypress" />

let user


describe('Super Admin', () => {

        it('View login SuperAdmin', () => {

            cy.request({
                method: 'POST',
                url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/commadmin', 
                // form: true,
                failOnStatusCode: false,

                body: {
                    "user_name": "marabotu2",
                    "password": "secret1234"
                }
            })

            .then((res) => {
                cy.log(res)

                const commadmin = res.body
                const status = res.status
                const duration = res.duration
                const headers = res.headers

                // expect(res.status).to.eq(404)
                // expect(res.body.code).to.eq('CMP01')
                // expect(res.body.status).to.eq(404)
                // expect(res.body.message).to.eq('Username tidak sesuai, mohon ulangi kembali')

                expect(res.status).to.eq(200)
                // expect(res.body.code).to.eq('CAP00')
                // expect(res.body.status).to.eq(200)
                // expect(res.body.message).to.eq('Sample success response.')
                cy.writeFile('cypress/fixtures/resultCommunityAdmin.json', { status: status, duration: duration, headers: headers, commadmin })
        })
    })
})