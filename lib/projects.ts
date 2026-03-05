/**
 * PROJECTS DATA
 * 
 * HOW TO ADD YOUR CLOUDINARY IMAGES:
 * 
 * 1. Upload your images to Cloudinary
 * 2. Get the Cloudinary URL (should look like: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/...)
 * 3. Replace the placeholder URLs below with your Cloudinary URLs
 * 
 * CLOUDINARY URL FORMAT:
 * https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/folder/image-name.jpg
 * 
 * You can also add transformations:
 * https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_1920,q_auto,f_auto/v1234567890/folder/image-name.jpg
 * 
 * Recommended transformations:
 * - w_1920 (max width 1920px)
 * - q_auto (automatic quality)
 * - f_auto (automatic format - webp/jpg)
 */

export interface Project {
  id: string;
  name: string;
  location: string;
  year: string;
  type: string;
  accent: string; // Hex color for this project
  hero: string; // Main hero image
  images: string[]; // Array of 25 images for the project page
}

export const projects: Project[] = [
  {
    id: 'casa-karen',
    name: 'Casa Karen',
    location: 'Cabo del Sol',
    year: '2019',
    type: 'Residential Villa',
    accent: '#d4a574',
    
    // REPLACE THIS WITH YOUR CLOUDINARY URL
    hero: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1280&fit=crop&q=90',
    
    // REPLACE THESE 25 URLS WITH YOUR CLOUDINARY URLS
    // Follow the pattern described above (full-width, centered, side-by-side)
    images: [
      // Image 1-2: Full-width arrival shots
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1280&fit=crop&q=85',
      
      // Image 3: Detail (will be 80% centered)
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1067&fit=crop&q=85',
      
      // Images 4-5: Side-by-side context
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&h=600&fit=crop&q=85',
      
      // Image 6: Full-width main living
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1280&fit=crop&q=85',
      
      // Image 7: Intimate moment (60% centered)
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&h=800&fit=crop&q=85',
      
      // Image 8: Full-width view
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&h=1280&fit=crop&q=85',
      
      // Images 9-10: Side-by-side details
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&h=600&fit=crop&q=85',
      
      // Image 11: Full-width bedroom
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1280&fit=crop&q=85',
      
      // Image 12: 80% centered bathroom
      'https://images.unsplash.com/photo-1600566752229-250ed79470f7?w=1600&h=1067&fit=crop&q=85',
      
      // Images 13-14: Side-by-side materials
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&h=600&fit=crop&q=85',
      
      // Image 15-16: Full-width outdoor/pool
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1280&fit=crop&q=85',
      
      // Image 17: 60% centered detail
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop&q=85',
      
      // Images 18-19: Side-by-side landscape
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=900&h=600&fit=crop&q=85',
      
      // Image 20: Full-width dusk hero
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1920&h=1280&fit=crop&q=85',
      
      // Images 21-22: Side-by-side evening
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&h=600&fit=crop&q=85',
      
      // Image 23: 80% centered detail
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&h=1067&fit=crop&q=85',
      
      // Image 24-25: Full-width final shots
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1280&fit=crop&q=85',
    ],
  },
  
  {
    id: 'rancho-espiritu',
    name: 'Rancho Espíritu',
    location: 'El Sauzal',
    year: '2020',
    type: 'Eco Lodge',
    accent: '#c97854',
    
    hero: 'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066864/rancho-espiritu-los-cabos-mexico01_xofj8m_uiofrd.jpg',
    
    images: [
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066864/rancho-espiritu-los-cabos-mexico01_xofj8m_uiofrd.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066861/rancho-espiritu-los-cabos-mexico09_gqbt91_liglll.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066862/rancho-espiritu-los-cabos-mexico08_is9pqz_b7lm66.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066863/rancho-espiritu-los-cabos-mexico07_ndch4t_nhtqmw.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066861/rancho-espiritu-los-cabos-mexico09_gqbt91_liglll.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066861/rancho-espiritu-los-cabos-mexico10_nmxbvo_q71dkh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066859/rancho-espiritu-los-cabos-mexico12_b1zk9k_cuamy8.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066860/rancho-espiritu-los-cabos-mexico11_jhscfs_uspniz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066858/rancho-espiritu-los-cabos-mexico13_df7d1k_z9fe17.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066857/rancho-espiritu-los-cabos-mexico14_bf8thr_sbofmg.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066851/rancho-espiritu-los-cabos-mexico23_pcarzl_tsxcqn.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066845/rancho-espiritu-los-cabos-mexico37_egxe2z_raubyh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066853/rancho-espiritu-los-cabos-mexico20_ebqruw_dlz0rh.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066845/rancho-espiritu-los-cabos-mexico39_lh06mq_a6mjur.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066855/rancho-espiritu-los-cabos-mexico16_wjoevm_fnzjui.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066847/rancho-espiritu-los-cabos-mexico31_a7kjyl_gyug58.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1200,q_auto,f_auto/v1772066851/rancho-espiritu-los-cabos-mexico24_aaggvm_qq19xz.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066850/rancho-espiritu-los-cabos-mexico26_zjmgji_ksbdy9.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066849/rancho-espiritu-los-cabos-mexico28_hlp6pj_fnvacg.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066843/rancho-espiritu-los-cabos-mexico51_vtywho_qhkt2a.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066845/rancho-espiritu-los-cabos-mexico39_lh06mq_a6mjur.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_900,q_auto,f_auto/v1772066844/rancho-espiritu-los-cabos-mexico50_vurshb_opyavm.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1600,q_auto,f_auto/v1772066843/rancho-espiritu-los-cabos-mexico52_cfi8ar_uoohqj.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066847/rancho-espiritu-los-cabos-mexico31_a7kjyl_gyug58.jpg',
      'https://res.cloudinary.com/dzjcndphq/image/upload/w_1920,q_auto,f_auto/v1772066846/rancho-espiritu-los-cabos-mexico36_lvamiy_hx69xu.jpg',
    ],
  },
  
  {
    id: 'el-parque-08',
    name: 'El Parque 08',
    location: 'Querencia',
    year: '2021',
    type: 'Modern Villa',
    accent: '#4a7c89',
    
    // REPLACE WITH YOUR CLOUDINARY URL
    hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=90',
    
    // REPLACE THESE 25 URLS WITH YOUR CLOUDINARY URLS
    images: [
      // Add your 25 images here
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=85',
    ],
  },
  
  {
    id: 'cresta-del-mar',
    name: 'Cresta del Mar 36',
    location: 'Cabo San Lucas',
    year: '2018',
    type: 'Mediterranean Villa',
    accent: '#c4968c',
    
    // REPLACE WITH YOUR CLOUDINARY URL
    hero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=90',
    
    // REPLACE THESE 25 URLS WITH YOUR CLOUDINARY URLS
    images: [
      // Add your 25 images here
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1280&fit=crop&q=85',
    ],
  },
  
  {
    id: 'casa-agradecida',
    name: 'Casa Agradecida Stable',
    location: 'Rancho Migriño',
    year: '2022',
    type: 'Equestrian Facility',
    accent: '#7a6551',
    
    // REPLACE WITH YOUR CLOUDINARY URL
    hero: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=90',
    
    // REPLACE THESE 25 URLS WITH YOUR CLOUDINARY URLS
    images: [
      // Add your 25 images here
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1280&fit=crop&q=85',
    ],
  },
];

// Helper function to get next project
export function getNextProject(currentId: string): Project | null {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return null;
  return projects[currentIndex + 1];
}

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
