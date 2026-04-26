export default function LaPanetteria(){ const wa='https://wa.me/573045209981'; return (<div className='min-h-screen bg-[#f7f1ea] text-[#2b1b12] font-sans scroll-smooth'>
<header className='sticky top-0 z-10 backdrop-blur-md bg-[#1d120d]/90 text-white px-8 py-4 flex justify-between items-center border-b border-white/10'>
<div><h1 className='text-2xl font-bold text-[#e8b18b]'>La Panetteria</h1><p className='text-xs tracking-[0.3em]'>ARTESANAL</p></div>
<nav className='hidden md:flex gap-6 text-sm'><a href='#inicio'>Inicio</a><a href='#nosotros'>Nosotros</a><a href='#productos'>Productos</a><a href='#pedidos'>Pedidos</a><a href='#contacto'>Contacto</a></nav>
<a href={wa} target='_blank' className='bg-[#e8b18b] text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition'>Pedir por WhatsApp</a>
</header>
<section id='inicio' className='grid md:grid-cols-2 items-center px-8 md:px-16 py-24 bg-gradient-to-r from-[#140c08] to-[#3a2418] text-white'>
<div><h2 className='text-5xl md:text-7xl font-serif leading-tight'>La Panetteria Artesanal</h2><p className='mt-6 text-xl text-[#f1d2be]'>El sabor de la tradición, horneado hoy mismo.</p></div>
<img className='rounded-3xl shadow-2xl mt-8 md:mt-0 hover:scale-105 transition duration-500' src='https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'/></section>
<section id='nosotros' className='px-8 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center'>
<img className='rounded-3xl shadow-lg' src='https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80'/>
<div><p className='uppercase tracking-[0.4em] text-sm text-[#9b6b4b]'>Quiénes Somos</p><h3 className='text-5xl font-serif mt-2'>Hecho con pasión, para ti.</h3><p className='mt-6 text-lg leading-8'>En el corazón de Calasanz, creamos momentos felices con panadería artesanal. Ingredientes seleccionados y procesos lentos para un sabor auténtico.</p></div>
</section>
<section id='productos' className='px-8 md:px-16 py-16 bg-white'>
<p className='uppercase tracking-[0.4em] text-center text-sm text-[#9b6b4b]'>Nuestros Productos</p><h3 className='text-5xl font-serif text-center mt-2'>Delicias para cada momento ✨</h3>
<div className='grid md:grid-cols-3 gap-8 mt-12'>
{[
['Panes de Masa Madre','Crujientes por fuera, suaves por dentro.','https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80'],
['Repostería Fina','Croissants, muffins y delicias dulces.','https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'],
['Café de Especialidad','El acompañante perfecto para tu pan favorito.','https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80']].map((p,i)=><div key={i} className='rounded-3xl overflow-hidden shadow-lg bg-[#faf6f1] hover:-translate-y-2 hover:shadow-2xl transition duration-300'><img className='h-56 w-full object-cover' src={p[2]}/><div className='p-6'><h4 className='text-2xl font-semibold'>{p[0]}</h4><p className='mt-2'>{p[1]}</p></div></div>)}
</div></section>
<section id='pedidos' className='px-8 md:px-16 py-16 bg-[#2b1b12] text-white grid md:grid-cols-2 gap-8 items-center'>
<div><h3 className='text-5xl font-serif'>¿Tienes un antojo o necesitas pan fresco hoy?</h3><p className='mt-4 text-lg text-[#f1d2be]'>¡Estamos a un mensaje de distancia!</p><a href={wa} target='_blank' className='inline-block mt-8 bg-[#e8b18b] text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition'>Pedir por WhatsApp ahora</a></div>
<img className='rounded-3xl' src='https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80'/></section>
<footer id='contacto' className='px-8 md:px-16 py-16 bg-[#140c08] text-[#f1d2be] grid md:grid-cols-4 gap-8 border-t border-white/10'>
<div><h4 className='text-2xl text-white font-bold'>La Panetteria</h4><p className='mt-3'>C. 50 #81b-10, Calasanz Parte Alta, Medellín.</p></div>
<div><h4 className='text-white font-semibold'>Horarios</h4><p className='mt-3'>Lunes a Sábado: 7:00 - 20:00<br/>Domingos: 8:00 - 18:00</p></div>
<div><h4 className='text-white font-semibold'>Contacto</h4><p className='mt-3'>+57 304 5209981</p></div>
<div><h4 className='text-white font-semibold'>Ubicación</h4><iframe className='mt-3 w-full h-32 rounded-xl' loading='lazy' src='https://www.google.com/maps?q=Calasanz%20Medellin&output=embed'></iframe></div></footer><a href={wa} target='_blank' className='fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl font-bold hover:scale-110 transition'>WhatsApp</a><div className='fixed left-6 bottom-6 bg-white text-[#2b1b12] px-4 py-2 rounded-full shadow-xl text-sm font-semibold'>⭐ 4.9/5 Clientes felices</div></div>) }
