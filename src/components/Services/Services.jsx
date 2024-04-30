import { services } from '../../constants'
import ServiceCard from '../ServiceCard/ServiceCard'

const Services = () => {
  return (
    <section className='max-container grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 justify-center gap-9'>
      {services.map((service,index)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services