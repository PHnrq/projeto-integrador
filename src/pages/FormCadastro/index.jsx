import { useState } from 'react';
import { viaCepApi } from '../../services/viaCepApi';
import closeIcon from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg'

import './styles.css'

export function FormCadastro(){
  const emailRegex = new RegExp ("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]{1,63}$");
  const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

  
  function maskPhone(elementProps) {
    const elementValue = elementProps.target.value

    let phoneNumber = elementValue.replace(/\D/g, "");
    phoneNumber = phoneNumber.replace(/^0/, "");
    if (phoneNumber.length > 10) {
      phoneNumber = phoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (phoneNumber.length > 5) {
      phoneNumber = phoneNumber.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (phoneNumber.length > 2) {
      phoneNumber = phoneNumber.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    }
    
    elementProps.target.value = phoneNumber;
  }
  
  function isInputEmpty(elementProps){
    const element = elementProps.target
    const elementValue = elementProps.target.value
    const spanWarning = elementProps.target.nextElementSibling

    if(elementValue.length === 0){
      spanWarning.innerHTML = `Este campo é obirgatorio`
      element.classList.add('invalid-input')
    }else{
      spanWarning.innerHTML = ``
      element.classList.remove('invalid-input')

      if(elementProps.target.type === 'email'){
        isEmailValid(elementValue, spanWarning, element)
      }else if(elementProps.target.type === 'tel'){
        isPhoneNumberValid(elementValue, spanWarning, element)
      }else if(elementProps.target.type === 'password'){
        isPasswordValid(elementValue, spanWarning, element)
      }else if(elementProps.target.id === 'cep'){
        isCepValid(elementValue, spanWarning, element)
      }
    }
  }

  function isEmailValid(value, spanWarning, element){
    if(!value.match(emailRegex)){
      spanWarning.innerHTML = `Email invalido`
      element.classList.add('invalid-input')
    }else{
      spanWarning.innerHTML = ``
      element.classList.remove('invalid-input')
    }
  }

  function isPhoneNumberValid(value, spanWarning, element){
    let phoneNumber = value.replace(/\D/g, "");

    if(phoneNumber.length !== 11){
      spanWarning.innerHTML = `Este não é um telefone valido, verfique e tente novamente`
      element.classList.add('invalid-input')
    }else{
      spanWarning.innerHTML = ``
      element.classList.remove('invalid-input')
    }
  }

  function isPasswordValid(value, spanWarning, element){
    if(!value.match(passwordRegex)){
      spanWarning.innerHTML = `A senha de conter no minimo 8 caracteres, e pelo menos uma letra maiuscula, uma letra minuscula e um numero. `
      element.classList.add('invalid-input')
    }else{
      spanWarning.innerHTML = ``
      element.classList.remove('invalid-input')
    }
  }

  function isCepValid(value, spanWarning, element){
    if(value.length !== 8){
      spanWarning.innerHTML = `O CEP digitado é invalido`
      element.classList.add('invalid-input')
    }else{
      viaCepApi.get(`${value}/json/`).then(response => {
  
        if(response.data.erro) {
          spanWarning.innerHTML = `O CEP digitado é invalido`
          element.classList.add('invalid-input')
        }else{
          const city = document.getElementById('city');
          const street = document.getElementById('street');
          const district = document.getElementById('district');
          const uf = document.getElementById('uf');
    
          city.value = response.data.localidade
          uf.value = response.data.uf
          street.value = response.data.logradouro
          district.value = response.data.bairro
  
          spanWarning.innerHTML = ``
          element.classList.remove('invalid-input')
        }
      });
    }

    
  }

  return (
    <div className="container">
      <form action="" className="form">
        <button className="btn-close-form">
          <img src={closeIcon} alt="Fechar" />
        </button>
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Dados pessoais
          </legend>
          
          <label htmlFor="name" className="form__label">
            Nome completo
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="form__input" 
              placeholder="Nome da empresa ou nome pessoal"
              required 
              onBlur={isInputEmpty.bind(this)}
              />
            <span className="warning-input"></span>
          </label>
    
          <label htmlFor="email" className="form__label">
            Email
            <input 
              type="email" 
              name="email" id="email" 
              placeholder="Digite seu email" 
              className="form__input" 
              required
              onBlur={isInputEmpty.bind(this)}
            />
            <span className="warning-input"></span>
          </label>
    
          <label htmlFor="tel" className="form__label">
            Telefone
            <input 
              type="tel" 
              name="tel" 
              id="tel" 
              placeholder="11987654321" 
              className="form__input" 
              length="11"
              required
              onBlur={isInputEmpty.bind(this)}
              onInput={maskPhone.bind(this)}
            />
            <span className="warning-input"></span>
          </label>
    
          <label htmlFor="password" className="form__label">
            Senha
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Digite sua senha" 
              className="form__input"
              required
              onBlur={isInputEmpty.bind(this)} 
             />
            <span className="warning-input"></span>
          </label>
        </fieldset>
  
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Endereço
          </legend>
          
          <label htmlFor="cep" className="form__label">
            CEP
            <input 
              type="text" 
              name="cep" 
              id="cep" 
              className="form__input" 
              placeholder="5555555"
              required
              onBlur={isInputEmpty.bind(this)}   
            />
            <span className="warning-input"></span>
          </label>
  
          <div className="fild-wrapper">
            <label htmlFor="street" className="form__label label-lg">
              Rua
              <input 
                type="text" 
                name="street" 
                id="street" 
                placeholder="Rua Fulano de tal" 
                className="form__input" 
                required
                onBlur={isInputEmpty.bind(this)} 
              />
              <span className="warning-input"></span>
            </label>
  
            <label htmlFor="number" className="form__label label-sm">
              Numero
              <input 
                type="text" 
                name="number" 
                id="number" 
                placeholder="02" 
                className="form__input input-sm"
                required
                onBlur={isInputEmpty.bind(this)}  
              />
              <span className="warning-input"></span>
            </label>
          </div>
    
    
          <label htmlFor="district" className="form__label">
            Bairro
            <input 
              type="text" 
              name="district" 
              id="district" 
              placeholder="Bairro X" 
              className="form__input" 
              required
              onBlur={isInputEmpty.bind(this)}
            />
            <span className="warning-input"></span>
          </label>
    
          <label htmlFor="complement" className="form__label">
            Complemento
            <input 
              type="password" 
              name="complement" 
              id="complement" 
              placeholder="Condominio 00" 
              className="form__input"
            />
            <span className="warning-input"></span>
          </label>
  
          <div className="fild-wrapper">
            <label htmlFor="city" className="form__label label-lg">
              Cidade
              <input 
                type="text"
                name="city" 
                id="city" 
                placeholder="Cidade Z" 
                className="form__input" 
                required
                onBlur={isInputEmpty.bind(this)}
              />
              <span className="warning-input"></span>
            </label>
  
            <label htmlFor="state" className="form__label label-sm">
              Estado
              <select className="form__input input-sm" id='uf'>
                <option value="">UF</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BH</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
              <span className="warning-input"></span>
            </label>
          </div>
        </fieldset>
  
        <div className="radio-wrapper">
          <h3 className="radio-wrapper__title">
            Cadastrar como:
          </h3>
  
          <label htmlFor="doador" className="radio-label">
            <input type="radio" name="type" id="doador" value="doador" className="radio-input"/>
            <span className="radio-span">Doador</span>
          </label>
  
          <label htmlFor="beneficiado" className="radio-label">
            <input type="radio" name="type" id="beneficiado" value="doador" className="radio-input" />
            <span className="radio-span">Beneficiado</span>
          </label>
        </div>
  
        <button type="submit" className="form-btn">Finalizar cadastro</button>
      </form>
    </div>
  )
}