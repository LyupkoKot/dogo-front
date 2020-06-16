import React, { useState, useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import GlobalStyle from '../../libs/globalStyles'
import { DashboardWrapper } from '../../components/ViewComponent/Dashboard/views'
import BackgroundBasis from '../../components/UIElements/Sections/BackgroundBasis'
import Input from '../../components/UIElements/Inputs/Input'
import MainLabel from '../../components/UIElements/Labels/MainLabel'
import RadioSection from '../../components/UIElements/Pickers/RadioSection'
import Dropdown from '../../components/UIElements/Inputs/Dropdown'
import MainButton from '../../components/UIElements/Buttons/MainButton'
import InputWide from '../../components/UIElements/Inputs/InputWide'
import { CookiesManagerContext } from '../../contextProviders/cookiesManager'
import { useRouter } from 'next/router'

const AddOffer = () => {

  const cookies = React.useContext(CookiesManagerContext)
  const userId = cookies.cookiesManager.getToken('x-auth-token')

  const router = useRouter()

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch(`http://77.55.221.84:3102/zpi/api/cities`
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
    city: '',
    healthDescription: '',
    behaviourDescription:'',
    size: '',
    age: '',
    type: '',
    sex: '',
    color: '',
    breed: '',
    cost: '',
    description: '',
    vaccines: '',
    allergy: '',
    healthProblems: '',
    behaviour: ''
  })

  console.log(userId, 1488)

  const handleCreate = () => {

    console.log({
      title: data.name,
        animal_type: data.type,
        sex: data.sex,
        size: data.size,
        age: data.age,
        color: data.color,
        breed: data.breed,
        cost_of_living: data.cost,
        description: data.description,
        vaccines: data.vaccines,
        allergies: data.allergy,
        health_status: active.healthActive ? 'Zdrowy' : 'Chory',
        illness_description: data.healthDescription,
        behavioral_disorders: active.behaviourActive,
        behavioral_disorders_description: data.behaviourDescription,
        city: data.city,
    }, 14888841)

    fetch('http://77.55.221.84:3102/zpi/api/advertisement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userId
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        title: data.name,
        animal_type: data.type,
        sex: data.sex,
        size: data.size,
        age: data.age,
        color: data.color,
        breed: data.breed,
        cost_of_living: data.cost,
        description: data.description,
        vaccines: data.vaccines,
        allergies: data.allergy,
        health_status: active.healthActive ? 'Zdrowy' : 'Chory',
        illness_description: data.healthDescription,
        behavioral_disorders: active.behaviourActive,
        behavioral_disorders_description: data.behaviourDescription,
        city: data.city,
      })
    })
    .then(result => {
      if (result.ok) {
        console.log(result)
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
          <RadioSection
            onChange={setData}
            data={data}
            setKey={'type'}
            items={['Kot', 'Pies']}
            photos={['../../../../static/icons/pussy.svg', '../../../../static/icons/dog.svg']}
            onPress={()=>{}}
          />
          <RadioSection
            onChange={setData}
            data={data}
            setKey={'sex'}
            items={['Samica', 'Samiec']}
            photos={['../../../../static/icons/female.svg', '../../../../static/icons/male.svg']}
            onPress={()=>{}}
          />
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
            value={data.vaccines}
            onChange={event => setData({...data, vaccines: event.target.value})}
          />
          <Input
            placeholder={'Uczulenia'}
            width={'410px'}
            float={'left'}
            vale={data.allergy}
            onChange={event => setData({...data, allergy: event.target.value})}
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
            onChange={event => setData({...data, healthDescription: event.target.value})}
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
            onChange={event => setData({...data, behaviourDescription: event.target.value})}
          />}
        </BackgroundBasis>
        <MainButton label={'Gotowe'} margin={'50px auto'} onClick={handleCreate}/>
      </DashboardWrapper>
    </MainLayout>
  )
}

export default AddOffer
