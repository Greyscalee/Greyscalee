let user


describe('Auth', () => {

        it('View Forgot Password', () => {

            cy.request({
                method: 'POST',
                url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/forgotpassword', 
                // form: true,
                failOnStatusCode: false,

                body: {
                    "otp": "664167",
                    "password": "secret123"
                  }
            })

            .then((res) => {
                cy.log(res)

                const OTP = res.body
                const status = res.status
                const duration = res.duration
                const headers = res.headers

                expect(res.status).to.eq(400)
                expect(res.body.code).to.eq('FPP02')
                expect(res.body.status).to.eq(400)
                expect(res.body.message).to.eq('OTP anda sudah tidak valid, gunakan fitur resend untuk mengirim OTP baru')

                // expect(res.status).to.eq(200)
                // expect(res.body.code).to.eq('ROP00')
                // expect(res.body.status).to.eq(200)
                // expect(res.body.message).to.eq('OTP berhasil di kirimkan ulang')
                cy.writeFile('cypress/fixtures/resultCommunitySubs.json', { status: status, duration: duration, headers: headers, OTP })
        })
    })
})