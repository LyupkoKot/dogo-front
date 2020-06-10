import React, { useState, useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import GlobalStyle from '../../libs/globalStyles'
import { DashboardWrapper } from '../../components/ViewComponent/Dashboard/views'
import BackgroundBasis from '../../components/UIElements/Sections/BackgroundBasis'
import Input from '../../components/UIElements/Inputs/Input'
import MainLabel from '../../components/UIElements/Labels/MainLabel'
import RadioSection from '../../components/UIElements/Pickers/RadioSection'
import Dropdown from '../../components/UIElements/Inputs/Dropdown'
import DoubleWrapper from '../../themes/views/DoubleWrapper/view'
import MainButton from '../../components/UIElements/Buttons/MainButton'
import InputWide from '../../components/UIElements/Inputs/InputWide'

const AddOffer = () => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.246:3001/zpi/api/cities'
    )
    .then(result => result.json())
    .then(result => setCities(result))
    .catch(err => console.log(err))
  }, [])

  const [active, setActive] = useState({
    cityActive: false,
    sizeActive: false,
    ageActive: false,
    healthActive: false,
    behaviourActive: false
  })
  const [data, setData] = useState({
    name: '',
    city: null,
    healthDescription: '',
    behaviourDescription: null,
    size: null,
    age: null,
    type: null,
    sex: null,
    color: null,
    breed: null,
    cost: null,
    description: null,
    vaccination: null,
    allergy: null,
    healthProblems: null,
    behaviour: null
  })

  const handleCreate = () => {
    fetch('http://192.168.1.246:3001/zpi/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        title: data.name,
        animal_type: data.type,
        sex: data.sex,
        size: data.size,
        age: data.age,
        color: data.color,
        city: data.city,
        breed: data.breed,
        cost_of_living: data.cost,
        description: data.description,
        vaccines: data.vaccination,
        allergies: data.allergy,
        health_status: active.healthActive,
        illness_description: data.healthDescription,
        behavioral_disorders: active.behaviourActive,
        behavioral_disorders_description: data.behaviourDescription
      })
    })
    .then(result => {
      if (result.ok) {
        document.cookie = `token=${result.headers.get('x-auth-token')}`
        router.push('/')
      }
    })
    .catch(err => console.log(err))
  }

  console.log(data.sex)

  return (
    <MainLayout>
      <GlobalStyle/>
      <DashboardWrapper>
        <MainLabel title={'Opis'}/>
        <BackgroundBasis>
          <Input
            placeholder={'Imie'}
            width={'410px'}
            float={'left'}
            value={data.name}
            onChange={event => setData({...data, name: event.target.value})}
          />
          <Dropdown
            isActive={active.cityActive}
            setActive={() => setActive({...active, cityActive: !active.cityActive})}
            options={cities}
            value={data.city}
            placeholder={'Miejscowość'}
            setValue={option => setData({...data, city: option})}
          />
          <RadioSection onChange={() => setData({...data, })}
                        data={data} setKey={'type'}
                        items={['Kot', 'Pies']} photos={[]}/>
                        {/*todo*/}
          <RadioSection onChange={setData} data={data} setKey={'sex'} items={['Samica', 'Samiec']}/>
          <Dropdown
            isActive={active.sizeActive}
            setActive={() => setActive({...active, sizeActive: !active.sizeActive})}
            options={['Mały', 'Średni', 'Duży']}
            value={data.size}
            placeholder={'Rozmiar'}
            setValue={option => setData({...data, size: option})}
          />
          <Dropdown
            isActive={active.ageActive}
            setActive={() => setActive({...active, ageActive: !active.ageActive})}
            options={['Młody', 'Dorosły', 'Stary']}
            value={data.age}
            placeholder={'Wiek'}
            setValue={option => setData({...data, age: option})}
          />
          <Input
            placeholder={'Umaszczenie'}
            width={'410px'}
            float={'left'}
            value={data.color}
            onChange={event => setData({...data, color: event.target.value})}
          />
          <Input
            placeholder={'Rasa'}
            width={'410px'}
            float={'left'}
            value={data.breed}
            onChange={event => setData({...data, breed: event.target.value})}
          />
          <Input
            placeholder={'Koszty utrzymania'}
            width={'410px'}
            float={'left'}
            value={data.cost}
            onChange={event => setData({...data, cost: event.target.value})}
          />
          <InputWide
            placeholder={'Napisz trochę biografii zwierza...'}
            rows={5}
            width={'100%'}
            value={data.description}
            onChange={event => setData({...data, description: event.target.value})}
          />
        </BackgroundBasis>
        <MainLabel title={'Zdrowie'}/>
        <BackgroundBasis>
          <Input
            placeholder={'Szczepienia podstawowe przeciwko chorobom zakaźnym'}
            width={'410px'}
            float={'left'}
            vale={data.vaccination}
            onChange={value => setData({...data, vaccination: value})}
          />
          <Input
            placeholder={'Uczulenia'}
            width={'410px'}
            float={'left'}
            vale={data.allergy}
            onChange={value => setData({...data, allergy: value})}
          />
          <Dropdown
            isActive={active.healthActive}
            setActive={() => setActive({...active, healthActive: !active.healthActive})}
            options={['Tak', 'Nie']}
            value={data.healthProblems}
            placeholder={'Chory'}
            setValue={option => setData({...data, healthProblems: option})}
          />
          {data.healthProblems === 'Tak' &&
          <InputWide
            placeholder={'Opisz choroby zwierza'}
            rows={5}
            width={'100%'}
            vale={data.healthDescription}
            onChange={value => setData({...data, healthDescription: value})}
          />}
          <Dropdown
            isActive={active.behaviourActive}
            setActive={() => setActive({...active, behaviourActive: !active.behaviourActive})}
            options={['Tak', 'Nie', 'Nie wiem']}
            value={data.behaviour}
            placeholder={'Czy są zaburzenia behawioralne?'}
            setValue={option => setData({...data, behaviour: option})}
          />
          {data.behaviour === 'Tak' &&
          <InputWide
            placeholder={'Opisz zaburzenia behawioralne zwierza'}
            rows={5}
            width={'100%'}
            vale={data.behaviourDescription}
            onChange={value => setData({...data, behaviourDescription: value})}
          />}
        </BackgroundBasis>
        <MainButton label={'Gotowe'} margin={'50px auto'} onClick={handleCreate}/>
      </DashboardWrapper>
    </MainLayout>
  )
}

export default AddOffer
