import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './create'
import Login from './login'
import Button from '@material-ui/core/Button'
import './index.css'
import { Link } from 'react-router-dom'
import Products from '../products.json'
import { UpdateCart, DeleteItem } from '../actions'
import { useSpring, animated } from 'react-spring'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import { toaster } from 'evergreen-ui'
const Brands = [
    
    "CHANEL",
    "GUCCI",
    "DIOR",
    "LOUBOUTIN",
    "FENTY",
    "HERMES",
    "NIKE",
    "ADIDAS",
    "CARTIER"
]
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

class Index extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      back: 'white'
    }
  }

  renderPage = route => {
    switch (route) {
      case '/':
        return <Landing changeBack={this.background} />
      case '/create':
        return <Create />
      case '/login':
        return <Login />
      case '/cart':
        return <Cart />
      default:
        return <Landing />
    }
  }
  background = color => {
    this.setState({
      back: color
    })
  }

  render () {
    return (
      <div
        className={`h-screen w-screen flex relative flex-col  ${'bg-' +
          this.state.back}`}
      >
        {this.props.state.CART.length ? (
          <Link
            to='/cart'
            className='absolute cartCont  flex flex-col justify-center items-center'
          >
            <div className='w-full h-full relative'>
              <Badge
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                badgeContent={this.props.state.CART.length}
                color='black'
              >
                <ShoppingCartIcon color='black' />
              </Badge>
            </div>
          </Link>
        ) : null}
        <Navbar />
        {this.renderPage(this.props.location.pathname)}

      </div>
    )
  }
}

function LandingW (proper) {
  const [current, setCurrent] = React.useState(0)
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  React.useEffect(() => {
    const changeIn = setInterval(() => {
      if (Products.length - 1 === current) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 5000)

    return () => clearInterval(changeIn)
  }, [current])

  const Buy = p => {
    if (proper.state.CART.some(g => Products[p].id === g.id))
      return toaster.warning('Item Already in cart')
    proper.UpdateCart(Products[p])
    return toaster.success(
      'Yay! ' + Products[p].title + ' added to your cart successfully'
    )
  }

  const renderProduct = id => {
    return (
      <div className='productMain flex flex-row justify-center w-4/5'>
        <animated.div
          className='card w-full flex flex-row justify-center'
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <img className='shadow-xl' src={Products[id].picture} />
        </animated.div>
      </div>
    )
  }
  const renderDes = id => {
    return (
      <div className='productDes flex flex-col justify-center w-4/5'>
        <h1>{Products[id].title}</h1>
        <h1>{Products[id].description}</h1>
        <h1>{Products[id].price}</h1>
        <Button
          onClick={() => Buy(id)}
          className='h-16 bg-black w-1/5 text-white'
        >
          BUY
        </Button>
      </div>
    )
  }

  return (
    <div className='h-full w-full bg-pink flex flex-col pt-5'>
      <div className='topClass flex flex-row'>
        <div className='productShowcase w-1/2 flex flex-row justify-center items-center '>
          {renderProduct(current)}
        </div>
        <div className='productDescription w-1/2 flex justify-center flex-col'>
          {renderDes(current)}
        </div>
      </div>
      <div className='bottomClass w-full flex flex-col h-full justify-around overflow-x-hidden items-center'>
       <div className="flex flex-row brandX">
       {Brands.map((brand)=>(
            <div className="brand text-5xl h-full flex flex-row font-bold text-black mx-10">
                {brand}
            </div>
        ))}
       </div>
       <div className="flex flex-row brandY">
       {Brands.reverse().map((brand)=>(
            <div className="brand text-5xl h-full flex flex-row font-bold text-black mx-10">
                {brand}
            </div>
        ))}
       </div>
      </div>
    </div>
  )
}

function CartW (props) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='cartReview md:w-3/4 overflow-x-hidden mb-4 lg:w-3/5 flex flex-col justify-center items-center'>
        {props.state.CART.map(item => (
          <Tile deleteItem={props.DeleteItem} product={item} />
        ))}
        {props.state.CART.length?null:(
            <div className="font-black text-4xl w-full text-center">
                EMPTY CART
            </div>
        )}
      </div>
      <div className="w-full md:w-3/4 lg:w-3/5 checkout flex flex-col items-center justify-center">
         <Button className="w-full md:w-3/4 lg:w-3/5 mb-10 bg-black h-16 text-white">CHECKOUT</Button>
         <Link to="/"><h5 className="text-2xl">Continue Shopping</h5></Link>   
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = {
  UpdateCart,
  DeleteItem
}

function Tile (props) {
  const deleteItem = id => {
      
    props.deleteItem(...Products.filter(i => i.id == id))
  }
  return (
    <div className='productTile shadow-2xl mb-5 bg-gray-100 w-full lg:w-4/5 py-2 px-4'>
      <div className='flex flex-row justify-around items-center'>
        <img src={props.product.picture} />
        <div className='h-full md:w-full lg:w-2/3 border-l-2 border-lime px-12 flex flex-col justify-center'>
          <h1 className="font-black">{props.product.title}</h1>
          <h5>{props.product.description}</h5>
          <h6 className="my-2 font-black">{props.product.price}</h6>
          <span
            onClick={() => deleteItem(props.product.id)}
            className='cursor-pointer w-2/4 bg-black text-center '
          >
            Delete item
          </span>
        </div>
      </div>
    </div>
  )
}

const Landing = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LandingW))

const Cart = connect(mapStateToProps, mapDispatchToProps)(withRouter(CartW))

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))