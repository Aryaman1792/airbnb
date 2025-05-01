import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                // img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/585802765.jpg?k=84e6d962ca761d081cb7eef6272aadf436d299ea50ed2e224418ccb9e49f0fa5&o=&hp=1"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="£40 / night"
                total="£157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="£35 / night"
                total="£207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="£55 / night"
                total="£320 total"

            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="£60 / night"

                total="£450 total"

            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="£65 / night"

                total="£480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="£90 / night"
                total="£650 total"
            />
            <SearchResult
                img="https://i.pinimg.com/736x/4a/b0/10/4ab010496b55e7fbdebd2c57bc668e90.jpg"

                location="Entire apartment in Shoreditch"
                title="Modern Loft with Rooftop Garden"
                description="2 guests · 1 bedroom · 1 bed · 1 bath · Kitchen · Wifi · Workspace"
                star={4.92}
                price="₹5,200 / night"
                total="₹36,400 total"
            />
            <SearchResult
                img="https://c3globe.com/wp-content/uploads/2023/04/01-Hoang-Tuong.jpg"
                location="Private room in Camden"
                title="Artist's Studio by the Canal"
                description="1 guest · Studio · 1 bed · Shared bath · Wifi · Kitchen access"
                star={4.78}
                price="£38 / night"
                total="£266 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1708737032695-959ba5e16b98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYXJtaW5nJTIwdmljdG9yaWFuJTIwdG93bmhvdXNlfGVufDB8fDB8fHww"
                location="Entire house in Notting Hill"
                title="Charming Victorian Townhouse"
                description="6 guests · 3 bedrooms · 3 beds · 2 baths · Kitchen · Garden · Wifi"
                star={4.85}
                price="£125 / night"
                total="£875 total"
            />

            <SearchResult
                img="https://assets.riparide.com/photo/217114/image/medium-b535992b871c2c2dbed26f3df470d92f.jpg"
                location="Entire cabin in Richmond"
                title="Riverside Wooden Cabin"
                description="2 guests · 1 bedroom · 1 bed · 1 bath · Kitchenette · Fireplace"
                star={4.9}
                price="£68 / night"
                total="£476 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1627363650407-b145507ad9ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5iJTIwTWluaW1hbGlzdCUyMEVjbyUyMFRpbnklMjBIb21lfGVufDB8fDB8fHww"
                location="Tiny house in Hackney"
                title="Minimalist Eco Tiny Home"
                description="2 guests · Studio · 1 bed · 1 bath · Kitchen · Rooftop terrace"
                star={4.65}
                price="£45 / night"
                total="£315 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1729606187987-60b2beb3e639?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5iJTIwTHV4dXJ5JTIwSG91c2Vib2F0JTIwd2l0aCUyMFNreWxpbmUlMjBWaWV3c3xlbnwwfHwwfHx8MA%3D%3D"
                location="Entire boat in Canary Wharf"
                title="Luxury Houseboat with Skyline Views"
                description="4 guests · 2 bedrooms · 2 beds · 1 bath · Kitchen · Deck"
                star={4.88}
                price="£92 / night"
                total="£644 total"
            />

            <SearchResult
                img="https://plus.unsplash.com/premium_photo-1661964175219-36f300b0e833?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWlyYm5iJTIwRWxlZ2FudCUyMEdhcmRlbiUyMEZsYXR8ZW58MHx8MHx8fDA%3D"
                location="Private room in Kensington"
                title="Elegant Garden Flat"
                description="2 guests · 1 bedroom · 1 bed · Private bath · Kitchen access"
                star={4.7}
                price="£56 / night"
                total="£392 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1722650364575-21eb6f786333?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5iJTIwRGVzaWduZXIlMjBMb2Z0JTIwd2l0aCUyMEJhbGNvbnl8ZW58MHx8MHx8fDA%3D"
                location="Entire apartment in Soho"
                title="Designer Loft with Balcony"
                description="2 guests · 1 bedroom · 1 bed · 1 bath · Kitchen · City views"
                star={4.82}
                price="£74 / night"
                total="£518 total"
            />

            <SearchResult
                img="https://images.unsplash.com/photo-1721742736283-0c408b210a3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyYm5iJTIwQ296eSUyMDE4dGglMjBDZW50dXJ5JTIwQ290dGFnZXxlbnwwfHwwfHx8MA%3D%3D"
                location="Entire cottage in Hampstead"
                title="Cozy 18th Century Cottage"
                description="4 guests · 2 bedrooms · 2 beds · 1 bath · Garden · Fireplace"
                star={4.95}
                price="£89 / night"
                total="£623 total"
            />

            <SearchResult
                img="https://plus.unsplash.com/premium_photo-1736194027657-44901edb9baf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpcmJuYiUyMEhpc3RvcmljJTIwTWFyaXRpbWUlMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
                location="Private room in Greenwich"
                title="Historic Maritime Apartment"
                description="1 guest · 1 bedroom · 1 bed · Shared bath · Kitchen access"
                star={4.68}
                price="£32 / night"
                total="£224 total"
            />
        </div>
    )
}

export default SearchPage
