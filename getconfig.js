let user


describe('Auth', () => {

        it('View Forgot Password', () => {

            cy.request({
                method: 'POST',
                url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/configcomm', 
                // form: true,
                failOnStatusCode: false,

                body: {
                    "name": "Empire 1"
                  }
            })

            .then((res) => {
                cy.log(res)

                const conf = res.body
                const status = res.status
                const duration = res.duration
                const headers = res.headers

                expect(res.status).to.eq(404)
                expect(res.body.code).to.eq('SLQ97')
                expect(res.body.status).to.eq(404)
                expect(res.body.message).to.eq('Data Tidak ditemukan')

                // expect(res.status).to.eq(200)
                // expect(res.body.code).to.eq('SLP00')
                // expect(res.body.status).to.eq(200)
                // expect(res.body.message).to.eq('Community Confirmed!')
                cy.writeFile('cypress/fixtures/resultGetConfig.json', { status: status, duration: duration, headers: headers, conf })
        })
    })
})