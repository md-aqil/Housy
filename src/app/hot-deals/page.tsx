'use client' 

import Footer from "@/components/Footer";
import HotHero from './HotHero';
import PropertyBrowser from "./PropertyBrowser";

import { ArrowRight, Heart, } from 'lucide-react';
import LiveHotDeals from "@/components/LiveHotDeals";
import ProductCard2 from "@/components/ProductCard2";
// Sample data for categories
const categories = [
  {
    id: 'newly-launched',
    title: 'Newly Launched',
    properties: 1230,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
  },
  {
    id: 'bank-auction',
    title: 'Bank Auction Property',
    properties: 1190,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
  },
  {
    id: 'affordable',
    title: 'Affordable Housing',
    properties: 1710,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
  },
  {
    id: 'urgent-resale',
    title: 'Urgent Resale Deals',
    properties: 670,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
  },
  {
    id: 'luxury',
    title: 'Luxury Villas',
    properties: 350,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
  },
  {
    id: 'waterfront',
    title: 'Waterfront Properties',
    properties: 480,
    image: 'https://images.unsplash.com/photo-1600607687120-9e4bbeadec59?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
  }
];

// Sample property data
const propertiesByCategory = {
  'newly-launched': [
    {
      id: 'nl-1',
      title: 'Modern Apartment with City View',
      location: 'Downtown, New York',
      price: 450000,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600047508788-26bb84920b06?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080',
      isFeatured: true
    },
    {
      id: 'nl-2',
      title: 'Spacious Family Home',
      location: 'Suburbia, California',
      price: 750000,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'nl-3',
      title: 'Studio Apartment',
      location: 'Brooklyn, New York',
      price: 320000,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    }
  ],
  'bank-auction': [
    {
      id: 'ba-1',
      title: 'Foreclosed Beachfront Villa',
      location: 'Malibu, California',
      price: 980000,
      bedrooms: 5,
      bathrooms: 4,
      image: 'https://images.unsplash.com/photo-1600607687644-c7e73da96547?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080',
      isFeatured: true
    },
    {
      id: 'ba-2',
      title: 'Blueberry Villa',
      location: 'Portland, Oregon',
      price: 520000,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'ba-3',
      title: 'Bank Seized Condo',
      location: 'Miami, Florida',
      price: 290000,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    }
  ],
  'affordable': [
    {
      id: 'af-1',
      title: 'Starter Home for Young Couples',
      location: 'Austin, Texas',
      price: 235000,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'af-2',
      title: 'Cozy Cottage Near Park',
      location: 'Denver, Colorado',
      price: 198000,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'af-3',
      title: 'Renovated Apartment Downtown',
      location: 'Chicago, Illinois',
      price: 210000,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1600607688162-99aaa9e939c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080',
      isFeatured: true
    }
  ],
  'urgent-resale': [
    {
      id: 'ur-1',
      title: 'Quick Sale Needed - Family Home',
      location: 'Seattle, Washington',
      price: 495000,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'ur-2',
      title: 'Owner Relocating - Must Sell',
      location: 'Phoenix, Arizona',
      price: 380000,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080',
      isFeatured: true
    },
    {
      id: 'ur-3',
      title: 'Price Reduced - Townhouse',
      location: 'Philadelphia, Pennsylvania',
      price: 340000,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    }
  ],
  'luxury': [
    {
      id: 'lx-1',
      title: 'Hillside Mansion with Pool',
      location: 'Beverly Hills, California',
      price: 12500000,
      bedrooms: 7,
      bathrooms: 9,
      image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080',
      isFeatured: true
    },
    {
      id: 'lx-2',
      title: 'Penthouse with 360° Views',
      location: 'Manhattan, New York',
      price: 8900000,
      bedrooms: 4,
      bathrooms: 4,
      image: 'https://images.unsplash.com/photo-1600607687101-6fee50ee4742?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'lx-3',
      title: 'Waterfront Estate',
      location: 'Palm Beach, Florida',
      price: 6700000,
      bedrooms: 6,
      bathrooms: 7,
      image: 'https://images.unsplash.com/photo-1600607687710-46bb69c5f512?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    }
  ],
  'waterfront': [
    {
      id: 'wf-1',
      title: 'Lake House with Private Dock',
      location: 'Lake Tahoe, Nevada',
      price: 890000,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080',
      isFeatured: true
    },
    {
      id: 'wf-2',
      title: 'Oceanside Condo',
      location: 'San Diego, California',
      price: 750000,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    },
    {
      id: 'wf-3',
      title: 'River View Property',
      location: 'Portland, Oregon',
      price: 680000,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080'
    }
  ]
};



export default function Home() {
  return (
    <>
      <HotHero />

      <div className="h-container x-round-card my-5">
        <PropertyBrowser 
          categories={categories}
          propertiesByCategory={propertiesByCategory}
        />
      </div>

      {/* Section: Bank Auction Property */}
      <section className="h-container x-round-card !my-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">BANK AUCTION PROPERTY</h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center text-primary hover:underline transition-all group">
              View More
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesByCategory["bank-auction"].map((property) => (
            <ProductCard2
              key={property.id}
              title={property.title}
              location={property.location}
              image={property.image}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              isFeatured={property.isFeatured}
            />
          ))}
        </div>
      </section>

      {/* Section: Newly Launched Property */}
      <section className="h-container x-round-card !my-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">NEWLY LAUNCHED PROPERTY</h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center text-primary hover:underline transition-all group">
              View More
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesByCategory["newly-launched"].map((property) => (
            <ProductCard2
              key={property.id}
              title={property.title}
              location={property.location}
              image={property.image}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              isFeatured={property.isFeatured}
            />
          ))}
        </div>
      </section>

      {/* Live Hot Deals */}
      <section className="my-5">
        <LiveHotDeals />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  );
}