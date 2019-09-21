const getForm = document.querySelector('.btn-form');

getForm.addEventListener('click', () => {
    event.preventDefault();
    
    const form = document.querySelector('.customer-form')
    const inputs = form.querySelectorAll('INPUT')
    
    const customerValidation = (customer) => {   
        //tentei fazer um gerador de mensagem de erro, mas não funcionou
        //por algum motivou a mensagem só aparecia no ultimo form 
        //usei o insertAdjacentElement("beforebegin", errorMessageGenerator) 
       
        // const errorMessage = (message) => {
        //     var message = document.createElement('span')
        //     message.classList.add('error-message')
        //     message.innerText = 'Esse campo é obrigatório*'
        //     return message;
        // }        
        // const errorMessageGenerator = errorMessage()
            //var message = document.createElement('span')
            const nameError = document.querySelector('[data-error="name_error"]')
            const lastNameError = document.querySelector('[data-error="lastName_error"]')
            const addressError = document.querySelector('[data-error="address_error"]')
            const cityError = document.querySelector('[data-error="city_error"]')
            const postalError = document.querySelector('[data-error="postal_error"]')
            const phoneError = document.querySelector('[data-error="phone_error"]')
            const emailError = document.querySelector('[data-error="email_error"]')

            
            if (customer.inputValue.name === ''){
                nameError.style.display = 'block'
            } else if (customer.inputValue.name.length != 0){
                nameError.style.display = 'none'
            }

            if (customer.inputValue.lastName === ''){         
                lastNameError.style.display = 'block'
            }   else if (customer.inputValue.lastName.length != 0){
                lastNameError.style.display = 'none'

            }

            if (customer.inputValue.address1 === ''){
                addressError.style.display = 'block'
            }else if (customer.inputValue.address1.length != 0){
                addressError.style.display = 'none'
      
            }
            if (customer.inputValue.city === ''){
                cityError.style.display = 'block'
            }else if (customer.inputValue.city.length != 0){
                cityError.style.display = 'none'

            }

            if (customer.inputValue.postalCode === ''){
                postalError.style.display = 'block'
            } else if (customer.inputValue.postalCode.length != 0){
                postalError.style.display = 'none'

            }

            if (customer.inputValue.phone === ''){
                phoneError.style.display = 'block'
            } else if (customer.inputValue.phone.length != 0){
                phoneError.style.display = 'none'

            }

            if (customer.inputValue.email === ''){
                emailError.style.display = 'block'
            } else if (customer.inputValue.email.length != 0){
                emailError.style.display = 'none'
            } 
            if (
                customer.inputValue.name === '' ||
                customer.inputValue.lastName === '' ||
                customer.inputValue.address1 === '' ||
                customer.inputValue.city === '' ||
                customer.inputValue.postalCode === '' ||
                customer.inputValue.phone === '' ||
                customer.inputValue.email === ''
            ){window.alert('Todos os campos devem ser preenchidos')}
            else{
                window.alert('Sua compra foi efetuada com sucesso')
                location.reload(true)
            }
       
    }
   
    const customer = {
        inputValue:{
            delivery: form.delivery_method.value,
            name: form.first_name.value,
            lastName: form.last_name.value,
            address1: form.Address_1.value,
            address2: form.Address_2.value,
            city: form.city.value,
            postalCode: form.postal_code.value,
            phone: form.phone.value,
            email: form.email.value,
            addressBillig: form.billing.value,
            paymentMethod: form.payment_method.value,
        },
    } 
    customerValidation(customer)
    
})


