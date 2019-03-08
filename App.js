import React, { Component } from 'react';
import Space from './Space';
import './App.css';
import mercury from './image/mercury.gif'
import venus from './image/venus.gif'
import earth from './image/earth.gif'
import mars from './image/mars.gif'
import jupiter from './image/jupiter.gif'
import saturn from './image/saturn.png'
import uranus from './image/uranus.gif'
import neptune from './image/neptune.gif'

import load from './hole.gif';


class App extends Component {

  state ={}

  _getItem = () => {
    this.setState({
      planets:[
        { id:0,
          name:"수성",
          image:mercury,
          intro:"수성(水星, 라틴어: Mercurius)은 태양에서 평균 5,800만 km 떨어진 가장 가까운 궤도를 도는 행성이다. 또한, 반지름 약 2,400km로 가장 작은 내행성이기도 하다. 공전 주기는 88일, 자전 주기는 58일이며, 밀도는 5.427g/cm3이다."
        },
        { id:1,
          name:"금성",
          image:venus,
          intro:"금성(金星, 라틴어: Venus)은 태양계의 두 번째 행성이다. 샛별, 새별로 불리기도 했다. 태양 주위를 224일 주기로 돌고 있으며 달에 이어서 밤하늘에서 두 번째로 밝은 천체이다. 가장 밝을 때의 밝기는 -4.5등급이다. 금성의 명칭은 오행 중 하나인 '금(金)'에서 유래하였으며, 태백성(太白星)으로도 불렸다. 금성은 그 출현 시간에 따라 다른 이름으로 불렸는데 저녁 무렵에 나타나는 금성을 장경성라고 부르고 새벽 무렵에 나타나는 금성을 샛별 혹은 명성(계명성)이라 불렀다. "
        },
        { id:2,
          name:"지구",
          image:earth,
          intro:"지구(地球, Earth)는 태양으로부터 세 번째 행성이며, 엷은 대기층으로 둘러싸여 있고, 지구형 행성 가운데 가장 크다. 지구는 45억 6700만 년 전 형성되었으며, 지구와 행성 테이아의 격렬한 충돌로 생성된 달을 위성으로 두고 있다. 지구 의미하는 기호의 두 선분은 자오선과 적도다. 태양에서 지구까지 거리는 약 1억 5000만 킬로미터(1천문단위)이다. 지구는 완전한 구(球)가 아닌 회전타원체에 가깝다. 적도는 반지름이 약 6378킬로미터, 극(極)반지름은 약 6357킬로미터이다. "
        },
        { id:3,
          name:"화성",
          image:mars,
          intro:"화성(火星, 영어: Mars)은 태양계의 네 번째 행성이다. 4개의 지구형 행성 중 하나다. 붉은색을 띠기 때문에 동양권에서는 불을 뜻하는 화(火)를 써서 화성 또는 형혹성(熒惑星)이라 부르고, 서양권에서는 로마 신화의 전쟁의 신 마르스의 이름을 따 Mars라 부른다. 오늘날 영어에서 3월을 뜻하는 March도 여기서 생겼다."
        },
        { id:4,
          name:"목성",
          image:jupiter,
          intro:"목성(木星, 라틴어: Jupiter)은 태양계의 다섯번째 행성이자 가장 큰 행성이다. 태양의 질량의 천분의 일배에 달하는 거대행성으로, 태양계에 있는 다른 모든 행성들을 합한 질량의 약 2.5배에 이른다. 목성은 토성과 마찬가지로 거대 기체 행성이다.(천왕성과 해왕성은 거대얼음행성). 목성은 고대 천문학자들에게도 잘 알려져 있었는데,[1] 로마인들은 목성에 로마 신화의 신인 유피테르의 이름을 붙였다."
        },
        { id:5,
          name:"토성",
          image:saturn,
          intro:"토성(土星，라틴어: Saturnus)은 태양으로부터 여섯 번째에 있는 태양계의 행성으로, 진성(鎭星)으로도 불렀다. 토성은 태양계 내의 행성 중 목성에 이어 두 번째로 크며, 지름은 약 12만 킬로미터로, 지구의 9.1배이며 부피는 760배에 달한다. "
        },
        { id:6,
          name:"천왕성",
          image:uranus,
          intro:"천왕성(天王星, Uranus)은 태양에서부터 일곱번째로 떨어져 있으며 세 번째로 반지름이 크고 네 번째로 질량이 큰 태양계의 행성이다. 영어 이름 '우라노스(Uranus)'는 크로노스의 아버지이자 제우스의 할아버지인 그리스의 신 우라노스에서 따온 것이다.(Οὐρανός) 이 행성은 기존의 다섯 행성들처럼 맨눈으로 볼 수 있음에도 불구하고 하늘에서 매우 느리게 움직이는데다 매우 어둡기 때문에 그 존재가 오랫동안 인류에게 밝혀지지 않았다"
        },
        { id:7,
          name:"해왕성",
          image:neptune,
          intro:"해왕성(海王星, 라틴어: Neptunus)은 태양계의 8개 행성 중 8번째 행성이다. 해왕(海王)은 ‘바다의 왕’이라는 한자어로, 포세이돈(그리스 신화명) 또는 넵투누스(로마 신화명)를 번역한 것이다. 해왕성은 8개 행성 중에서 직경으로는 4번째로 크고, 질량으로는 3번째로 크다. 해왕성의 질량은 지구의 17배로, 질량이 지구의 15배인 쌍둥이 행성 천왕성보다 약간 더 무겁다."
        },
      ],
      data:true
    }
    )
  }

_getItem2 = () => {
  const space_man = this.state.planets.map((planet) => {

  return <Space nameP={planet.name} imageP= {planet.image} intro={planet.intro} key= {planet.id}/>
    })
    return space_man

}
componentDidMount(){

setTimeout( () => {this._getItem()},2000)


}


  render() {

    return (
      <div className="App">


           {this.state.data ? this._getItem2() : <img src={load} className="loading" />}
      </div>
    );
  }
}

export default App;
