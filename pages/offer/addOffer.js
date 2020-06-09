import React, { useState } from 'react'
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
  const [active, setActive] = useState({
    sizeActive: false,
    monthActive: false,
    healthActive: false,
    pasozytyActive: false,
    behaviourActive: false
  })
  const [data, setData] = useState({
    size: null,
    month: null,
    health: null,
    pasozyty: null,
    behaviour: null
  })

  return (
    <MainLayout>
      <GlobalStyle/>
      <DashboardWrapper>
        <MainLabel title={'Opis'}/>
        <BackgroundBasis>
          <Input placeholder={'Imie'} width={'410px'} float={'left'}/>
          <Input placeholder={'Miejscowosc'} width={'410px'} float={'left'}/>
          <RadioSection items={['Kot', 'Pies']} photos={[]}/>
          <RadioSection items={['Samica', 'Samiec']}/>
          <Dropdown
            isActive={active.sizeActive}
            setActive={() => setActive({...active, sizeActive: !active.sizeActive})}
            options={['Maly (do 40cm)', 'Sredni (do 60cm)', 'Duzy']}
            value={data.size}
            placeholder={'Rozmiar'}
            setValue={option => setData({...data, size: option})}
          />
          <DoubleWrapper width={'410px'}>
            <Input placeholder={'Wiek'} width={'242px'} float={'left'}/>
            <Dropdown
              isActive={active.monthActive}
              setActive={() => setActive({...active, monthActive: !active.monthActive})}
              options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
              value={data.month}
              placeholder={'Miesiąc'}
              setValue={option => setData({...data, month: option})}
              width={'148px'}
              marginLeft={'20px'}
            />
          </DoubleWrapper>
          <Input placeholder={'Umaszczenie'} width={'410px'} float={'left'}/>
          <Input placeholder={'Rasa'} width={'410px'} float={'left'}/>
          <Input placeholder={'Koszty utrzymania'} width={'410px'} float={'left'}/>
          <InputWide placeholder={'Napisz trochę biografii zwierza...'} rows={5} width={'100%'} />
        </BackgroundBasis>
        <MainLabel title={'Zdrowie'}/>
        <BackgroundBasis>
          <Input placeholder={'Szczepienia podstawowe przeciwko chorobom zakaźnym'} width={'410px'} float={'left'}/>
          <Input placeholder={'Uczulenia'} width={'410px'} float={'left'}/>
          <Dropdown
            isActive={active.healthActive}
            setActive={() => setActive({...active, healthActive: !active.healthActive})}
            options={['Dobry', 'Normalny', 'Zly']}
            value={data.health}
            placeholder={'Ogólny stan zdrowia'}
            setValue={option => setData({...data, health: option})}
          />
          <Dropdown
            isActive={active.pasozytyActive}
            setActive={() => setActive({...active, pasozytyActive: !active.pasozytyActive})}
            options={['Tak', 'Nie', 'Nie wiem']}
            value={data.pasozyty}
            placeholder={'Czy są pasożyty?'}
            setValue={option => setData({...data, pasozyty: option})}
          />
          <Dropdown
            isActive={active.behaviourActive}
            setActive={() => setActive({...active, behaviourActive: !active.behaviourActive})}
            options={['Tak', 'Nie', 'Nie wiem']}
            value={data.behaviour}
            placeholder={'Czy są zaburzenia behawioralne?'}
            setValue={option => setData({...data, behaviour: option})}
          />
        </BackgroundBasis>
        <MainButton label={'Gotowe'} margin={'50px auto'}/>
      </DashboardWrapper>
    </MainLayout>
  )
}

export default AddOffer
