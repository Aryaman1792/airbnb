import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'


function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://sleep.brightspotcdn.com/dims4/default/392accc/2147483647/strip/true/crop/1200x800+0+0/resize/800x533!/quality/90/?url=http%3A%2F%2Fmattress-firm-brightspot.s3.amazonaws.com%2F65%2Ffb%2Ff17843fb45f1b426e5bfdcc2a272%2F10-resize.jpg"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            <Card
                src="https://plus.unsplash.com/premium_photo-1677644293715-c013fa300360?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5iJTIwU2t5bGluZSUyMFBlbnRob3VzZSUyMGluJTIwRHViYWl8ZW58MHx8MHx8fDA%3D"
                title="Skyline Penthouse in Dubai"
                description="Luxury 3-bedroom with private infinity pool and 360° city views"
                price="£850/night"
                star={4.98}
                superhost
                exclusive
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            <Card
                src="https://plus.unsplash.com/premium_photo-1686231456386-3b53c9249973?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5iJTIwTGFrZXNpZGUlMjBDYWJpbiUyMGluJTIwU2NvdGxhbmR8ZW58MHx8MHx8fDA%3D"
                title="Lakeside Cabin in Scotland"
                description="Cozy wooden cabin with private dock and mountain views"
                price="£180/night"
                star={4.92}
            />

            <Card
                src="https://images.unsplash.com/photo-1705354153221-ac72f6f58320?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyYm5iJTIwSGlzdG9yaWMlMjBFZGluYnVyZ2glMjBUb3duaG91c2V8ZW58MHx8MHx8fDA%3D"
                title="Historic Edinburgh Townhouse"
                description="Georgian-era home with modern amenities in city center"
                price="£220/night"
                star={4.85}
            />

            <Card
                src="https://images.unsplash.com/photo-1629337842225-535eaf58e769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpcmJuYiUyMEJlYWNoZnJvbnQlMjBWaWxsYSUyMGluJTIwQ29ybndhbGx8ZW58MHx8MHx8fDA%3D"
                title="Beachfront Villa in Cornwall"
                description="Private beach access with panoramic ocean views"
                price="£320/night"
                star={4.9}
            />

            <Card
                src="https://plus.unsplash.com/premium_photo-1680098057172-c1a73ab2c131?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5iJTIwUm9tYW50aWMlMjBDb3Rzd29sZHMlMjBDb3R0YWdlfGVufDB8fDB8fHww"
                title="Romantic Cotswolds Cottage"
                description="Thatched roof cottage with flower garden and fireplace"
                price="£150/night"
                star={4.88}
            />

            <Card
                src="https://images.unsplash.com/photo-1722650364308-a7142f120c1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcmJuYiUyME1vZGVybiUyMExvZnQlMjBpbiUyME1hbmNoZXN0ZXJ8ZW58MHx8MHx8fDA%3D"
                title="Modern Loft in Manchester"
                description="Industrial-chic space in the Northern Quarter"
                price="£110/night"
                star={4.78}
            />

            <Card
                src="https://plus.unsplash.com/premium_photo-1687995672988-be514f56428e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyYm5iJTIwQ2FzdGxlJTIwU3RheSUyMGluJTIwV2FsZXN8ZW58MHx8MHx8fDA%3D"
                title="Castle Stay in Wales"
                description="Authentic medieval tower with modern comforts"
                price="£400/night"
                star={4.95}
            />

            <Card
                src="https://images.unsplash.com/photo-1686931346464-5cf66d798b47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5iJTIwVHJlZWhvdXNlJTIwUmV0cmVhdCUyMGluJTIwRGV2b258ZW58MHx8MHx8fDA%3D"
                title="Treehouse Retreat in Devon"
                description="Eco-friendly tree canopy escape with hot tub"
                price="£190/night"
                star={4.82}
            />

            <Card
                src="https://images.unsplash.com/photo-1631986960110-15ff795482dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYm5iJTIwTHV4dXJ5JTIwSG91c2Vib2F0JTIwaW4lMjBMb25kb258ZW58MHx8MHx8fDA%3D"
                title="Luxury Houseboat in London"
                description="Moored in Canary Wharf with skyline views"
                price="£250/night"
                star={4.87}
            />

            <Card
                src="https://plus.unsplash.com/premium_photo-1733514433449-67ea470bcfa6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpcmJuYiUyMFZpbmV5YXJkJTIwQ290dGFnZSUyMGluJTIwU3Vzc2V4fGVufDB8fDB8fHww"
                title="Vineyard Cottage in Sussex"
                description="Working vineyard with wine tastings included"
                price="£175/night"
                star={4.9}
            />

            </div>
            
        </div>
    )
}

export default Home
