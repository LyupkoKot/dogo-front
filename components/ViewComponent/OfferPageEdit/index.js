import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CookiesManagerContext } from '../../../contextProviders/cookiesManager'
import { DashboardWrapper } from '../Dashboard/views'
import MainLabel from '../../UIElements/Labels/MainLabel'
import BackgroundBasis from '../../UIElements/Sections/BackgroundBasis'
import Input from '../../UIElements/Inputs/Input'
import Dropdown from '../../UIElements/Inputs/Dropdown'
import RadioSection from '../../UIElements/Pickers/RadioSection'
import InputWide from '../../UIElements/Inputs/InputWide'
import MainButton from '../../UIElements/Buttons/MainButton'
import { useSelector } from 'react-redux'

const OfferPageEdit = () => {

  const router = useRouter()

  const offer = useSelector(state => state.offer)

  const cookies = React.useContext(CookiesManagerContext)
  const token = cookies.cookiesManager.getToken("x-auth-token")

  const [cities, setCities] = useState([])

  const [active, setActive] = useState({
    cityActive: false,
    sizeActive: false,
    ageActive: false,
    healthActive: false,
    behaviourActive: false
  })
  const [data, setData] = useState({
    name: offer.title,
    city: offer.city,
    size: offer.size,
    age: offer.age,
    type: offer.animal_type === 'Kot' ? 0 : 1,
    sex: offer.sex === "Samica" ? 0 : 1,
    color: offer.color,
    breed: offer.breed,
    cost: offer.cost_of_living,
    description: offer.description,
    vaccines: offer.vaccines,
    allergies: offer.allergies,
    healthProblems: offer.health_status === 'Chory' ? 'Tak' : 'Nie',
    healthDescription: offer.illness_description,
    behaviour: offer.behavioral_disorders ? 'Tak' : 'Nie',
    behaviourDescription: offer.behavioral_disorders_description
  })

  useEffect(() => {
    fetch(`http://77.55.221.84:3102/zpi/api/cities`)
    .then(result => result.json())
    .then(result => setCities(result))
    .catch(err => console.log(err))
  }, [])

  const handleCreate = () => {
    fetch(`http://77.55.221.84:3102/zpi/api/advertisement/${offer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
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
        allergies: data.allergies,
        health_status: active.healthActive ? 'Zdrowy' : 'Chory',
        illness_description: data.healthDescription,
        behavioral_disorders: active.behaviourActive,
        behavioral_disorders_description: data.behaviourDescription,
        city: data.city,
      })
    })
    .then(result => result.ok && router.push("/offer/[id]", `/offer/${offer.id}`))
    .catch(err => console.log(err))
  }

  return (
    <div>
      {offer &&
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
          selected={data.type}
          onPress={()=>{}}
          onChange={setData}
          data={data}
          setKey={'type'}
          items={['Kot', 'Pies']}
          photos={['../../../../static/icons/pussy.svg', '../../../../static/icons/dog.svg']}
        />
        <RadioSection
          selected={data.sex}
          onPress={()=>{}}
          onChange={setData}
          data={data}
          setKey={'sex'}
          items={['Samica', 'Samiec']}
          photos={['../../../../static/icons/female.svg', '../../../../static/icons/male.svg']}
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
          vale={data.allergies}
          onChange={event => setData({...data, allergies: event.target.value})}
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
          options={['Tak', 'Nie']}
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
      }
      </div>
  )
}

export default OfferPageEdit;

