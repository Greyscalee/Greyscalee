let user


describe('Auth', () => {

        it('View Send OTP', () => {

            cy.request({
                method: 'POST',
                url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/sendotp', 
                // form: true,
                failOnStatusCode: false,

                body: {
                    "email": "envirtups-qa1@yahoo.com",
                    "community_id": "147"
                  }
            })

            .then((res) => {
                cy.log(res)

                const OTP = res.body
                const status = res.status
                const duration = res.duration
                const headers = res.headers

                expect(res.status).to.eq(400)
                expect(res.body.code).to.eq('ROP01')
                expect(res.body.status).to.eq(400)
                expect(res.body.message).to.eq('Anda sudah mencapai batas maksimal pengiriman OTP')

                // expect(res.status).to.eq(200)
                // expect(res.body.code).to.eq('ROP00')
                // expect(res.body.status).to.eq(200)
                // expect(res.body.message).to.eq('OTP berhasil di kirimkan ulang')
                cy.writeFile('cypress/fixtures/resultCommunitySubs.json', { status: status, duration: duration, headers: headers, OTP })
        })
    })
})