import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { DashboardWrapper, DashboardLabelStyled } from './views'
import RadioSection from '../../UIElements/Pickers/RadioSection'
import Dropdown from '../../UIElements/Inputs/Dropdown'
import SearchInput from '../../UIElements/Inputs/SearchInput'
import { CookiesManagerContext } from '../../../contextProviders/cookiesManager'
import { replacePolish } from '../../../utils/functions'

const Dashboard = ({ setOffer }) => {

  const cookies = React.useContext(CookiesManagerContext)
  const userToken = cookies.cookiesManager.getToken('x-auth-token')

  const [data, setData] = useState([])
  const [cities, setCities] = useState([])
  const [active, setActive] = useState({
    cityActive: false,
    ageActive: false,
    sizeActive: false,
    healthActive: false
  })
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState({
    type: '',
    sex: '',
    city: '',
    age: '',
    size: '',
    health: ''
  })

  const filteredData = search === ''
    ? data
    : data.filter(item => item.title.toLowerCase().includes(search) && item.is_active === true)

  function setFilter() {


    const url = 'http://77.55.221.84:3102/zpi/api/advertisement?'

    const searchObject = {
      type: filterData.type !== '' ? `AnimalType=${filterData.type === 'Koty' ? 'Kot' : 'Pies'}` : '',
      sex: filterData.sex !== '' ? `Sex=${filterData.sex}` : '',
      city: filterData.city !== '' ? `City=${filterData.city}` : '',
      age: filterData.age !== '' ? `Age=${replacePolish(filterData.age)}` : '',
      size: filterData.size !== '' ? `Size=${replacePolish(filterData.size)}` : '',
      health: filterData.health !== '' ? `HealthStatus=${filterData.health}` : ''
    }

    const finalUrl = url + Object.values(searchObject).filter(item => item !== '').join('&')


    const isReady = Object.values(searchObject).some(e => e !== '')


    isReady && fetch(finalUrl, {headers: {'x-auth-token': userToken}})
      .then(result => {
        return result.json();
      })
      .then(result => setData(result))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetch(`http://77.55.221.84:3102/zpi/api/cities`)
    .then(result => result.json())
    .then(result => setCities(result))
    .catch(error => console.log(error))

    fetch(`http://77.55.221.84:3102/zpi/api/advertisement`)
    .then(res => res.json())
    .then(response => setData(response))
    .catch(error => console.log(error))
  }, [])

  return (
    <DashboardWrapper>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <SearchInput
            onChange={event => setSearch(event.target.value)}
            value={filterData.search}
          />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
            <RadioSection
              items={['Koty', 'Psy']}
              width={'135px'}
              data={filterData}
              setKey={'type'}
              onChange={setFilterData}
              onPress={setFilter}
              photos={['../../../../static/icons/pussy.svg', '../../../../static/icons/dog.svg']}
            />
            <RadioSection
              items={['Samica', 'Samiec']}
              width={'135px'}
              data={filterData}
              setKey={'sex'}
              onChange={setFilterData}
              onPress={setFilter}
              photos={['../../../../static/icons/female.svg', '../../../../static/icons/male.svg']}
            />
            <Dropdown
              width={'280px'}
              marginTop={'20px'}
              isActive={active.cityActive}
              setActive={() => setActive({...active, cityActive: !active.cityActive})}
              options={cities}
              value={filterData.city}
              placeholder={'Miejscowość'}
              setValue={option => {setFilterData({...filterData, city: option}); setFilter()}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Dropdown
              width={'280px'}
              isActive={active.ageActive}
              setActive={() => setActive({...active, ageActive: !active.ageActive})}
              options={['Młody', 'Dorosły', 'Stary']}
              value={filterData.age}
              placeholder={'Wiek'}
              setValue={option => {setFilterData({...filterData, age: option}); setFilter()}}
            />
            <Dropdown
              width={'280px'}
              isActive={active.sizeActive}
              setActive={() => setActive({...active, sizeActive: !active.sizeActive})}
              options={['Mały', 'Średni', 'Duży']}
              value={filterData.size}
              placeholder={'Rozmiar'}
              setValue={option => {setFilterData({...filterData, size: option}); setFilter()}}
            />
            <Dropdown
              width={'280px'}
              isActive={active.healthActive}
              setActive={() => setActive({...active, healthActive: !active.healthActive})}
              options={['Chory', 'Zdrowy']}
              value={filterData.health}
              placeholder={'Ogólny stan zdrowia'}
              setValue={option => {setFilterData({...filterData, health: option}); setFilter()}}
            />
          </div>
        </div>
      {data &&
        <div>
          <DashboardLabelStyled>Ogłoszenie</DashboardLabelStyled>
          {filteredData.map((item, key) => <Card offer={item} key={key} setOffer={setOffer} />)}
        </div>}
    </DashboardWrapper>
  );
};

export default Dashboard;
