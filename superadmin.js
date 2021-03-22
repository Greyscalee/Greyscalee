let user


describe('Super Admin', () => {

        it('View login SuperAdmin', () => {

            cy.request({
                method: 'POST',
                url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/superadmin', 
                // form: true,
                failOnStatusCode: false,

                body: {
                    "user_name": "manusiaa",
	                "password": "hiyahiya"
                }
            })

        //     .then((res) => {
        //         cy.log(res)

        //         const superadmin = res.body
        //         const status = res.status
        //         const duration = res.duration
        //         const headers = res.headers

        //         // expect(res.status).to.eq(404)
        //         // expect(res.body.code).to.eq('CMP01')
        //         // expect(res.body.status).to.eq(404)
        //         // expect(res.body.message).to.eq('Username tidak sesuai, mohon ulangi kembali')
        //         expect(res.body.message).to.eq(product.message)
        //         expect(res.body.code).to.eq(product.code)
        //         // expect(res.status).to.eq(200)
        //         // expect(res.body.code).to.eq('CMP00')

        //         // expect(res.body.status).to.eq(200)
        //         // expect(res.body.message).to.eq('Login Successful')
        //         // cy.writeFile('cypress/fixtures/resultSuperAdmin.json', { status: status, duration: duration, headers: headers, superadmin })
        // })
    })
})