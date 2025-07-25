import { Product, ProductCategory } from '../types';

export const categories: ProductCategory[] = [
  {
    id: '1',
    name: 'Medicines',
    slug: 'medicines',
    description: 'Prescription and over-the-counter medicines',
    image: 'https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Pain Relief', 'Cold & Flu', 'Antibiotics', 'Diabetes', 'Blood Pressure'],
  },
  {
    id: '2',
    name: 'Health Supplements',
    slug: 'health-supplements',
    description: 'Vitamins, minerals and nutritional supplements',
    image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Vitamins', 'Minerals', 'Protein', 'Omega-3', 'Probiotics'],
  },
  {
    id: '3',
    name: 'Medical Devices',
    slug: 'medical-devices',
    description: 'Home healthcare and medical equipment',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Blood Pressure Monitor', 'Glucometer', 'Thermometer', 'Pulse Oximeter', 'Nebulizer'],
  },
  {
    id: '4',
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Health and hygiene products',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Sanitizers', 'Face Masks', 'Hand Wash', 'Body Care', 'Oral Care'],
  },
  {
    id: '5',
    name: 'Ayurvedic Products',
    slug: 'ayurvedic',
    description: 'Traditional Indian herbal medicines',
    image: 'https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Immunity Boosters', 'Digestive Health', 'Stress Relief', 'Joint Care', 'Hair Care'],
  },
  {
    id: '6',
    name: 'Baby Care',
    slug: 'baby-care',
    description: 'Products for infants and children',
    image: 'https://images.pexels.com/photos/3983221/pexels-photo-3983221.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: ['Diapers', 'Baby Food', 'Baby Care', 'Vaccination', 'Baby Safety'],
  },
];

export const products: Product[] = [
  // Medicines (9 products total)
  {
    id: '1',
    name: 'Dolo 650 Tablet',
    brand: 'Micro Labs',
    category: categories[0],
    subcategory: 'Pain Relief',
    description: 'Paracetamol 650mg tablet for fever and pain relief. Effective for headache, body ache, and fever.',
    ingredients: ['Paracetamol 650mg'],
    dosage: '1-2 tablets every 4-6 hours as needed',
    price: 32,
    mrp: 36,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3683094/pexels-photo-3683094.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 150,
    isPrescriptionRequired: false,
    expiryDate: '2025-12-31',
    manufacturingDate: '2023-01-15',
    rating: 4.5,
    reviewCount: 1247,
    tags: ['fever', 'pain relief', 'headache', 'paracetamol'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    name: 'Crocin Advance Tablet',
    brand: 'GSK',
    category: categories[0],
    subcategory: 'Pain Relief',
    description: 'Fast-acting pain relief with Paracetamol 500mg. Provides quick relief from headache and body pain.',
    ingredients: ['Paracetamol 500mg', 'Sodium 173mg'],
    dosage: '1-2 tablets every 4-6 hours',
    price: 28,
    mrp: 32,
    discount: 12,
    images: [
      'https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 200,
    isPrescriptionRequired: false,
    expiryDate: '2025-08-31',
    manufacturingDate: '2023-03-15',
    rating: 4.3,
    reviewCount: 892,
    tags: ['fever', 'pain relief', 'fast acting'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '3',
    name: 'Vicks VapoRub',
    brand: 'Vicks',
    category: categories[0],
    subcategory: 'Cold & Flu',
    description: 'Topical ointment for cold relief. Provides fast relief from nasal congestion and cough.',
    ingredients: ['Menthol', 'Camphor', 'Eucalyptus Oil'],
    dosage: 'Apply on chest, back and throat',
    price: 115,
    mrp: 125,
    discount: 8,
    images: [
      'https://images.pexels.com/photos/3683046/pexels-photo-3683046.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 85,
    isPrescriptionRequired: false,
    expiryDate: '2026-02-28',
    manufacturingDate: '2023-05-10',
    rating: 4.7,
    reviewCount: 2341,
    tags: ['cold', 'cough', 'congestion', 'menthol'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '9',
    name: 'Azithromycin 500mg',
    brand: 'Cipla',
    category: categories[0],
    subcategory: 'Antibiotics',
    description: 'Broad-spectrum antibiotic for bacterial infections. Effective against respiratory tract infections.',
    ingredients: ['Azithromycin 500mg'],
    dosage: '1 tablet daily for 3-5 days as prescribed',
    price: 85,
    mrp: 95,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 45,
    isPrescriptionRequired: true,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-01',
    rating: 4.4,
    reviewCount: 567,
    tags: ['antibiotic', 'infection', 'prescription'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '10',
    name: 'Metformin 500mg',
    brand: 'Sun Pharma',
    category: categories[0],
    subcategory: 'Diabetes',
    description: 'Anti-diabetic medication for Type 2 diabetes. Helps control blood sugar levels.',
    ingredients: ['Metformin Hydrochloride 500mg'],
    dosage: '1-2 tablets twice daily with meals',
    price: 45,
    mrp: 52,
    discount: 13,
    images: [
      'https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 120,
    isPrescriptionRequired: true,
    expiryDate: '2025-11-30',
    manufacturingDate: '2023-06-15',
    rating: 4.6,
    reviewCount: 834,
    tags: ['diabetes', 'blood sugar', 'prescription'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '11',
    name: 'Amlodipine 5mg',
    brand: 'Lupin',
    category: categories[0],
    subcategory: 'Blood Pressure',
    description: 'Calcium channel blocker for high blood pressure and chest pain (angina).',
    ingredients: ['Amlodipine Besylate 5mg'],
    dosage: '1 tablet once daily',
    price: 38,
    mrp: 42,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/3683046/pexels-photo-3683046.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 95,
    isPrescriptionRequired: true,
    expiryDate: '2025-10-31',
    manufacturingDate: '2023-05-20',
    rating: 4.5,
    reviewCount: 456,
    tags: ['blood pressure', 'hypertension', 'prescription'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '24',
    name: 'Cetirizine 10mg',
    brand: 'Dr. Reddy\'s',
    category: categories[0],
    subcategory: 'Allergy',
    description: 'Antihistamine for allergic rhinitis, urticaria, and other allergic conditions.',
    ingredients: ['Cetirizine Hydrochloride 10mg'],
    dosage: '1 tablet once daily or as directed',
    price: 22,
    mrp: 25,
    discount: 12,
    images: [
      'https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 180,
    isPrescriptionRequired: false,
    expiryDate: '2025-08-31',
    manufacturingDate: '2023-02-10',
    rating: 4.4,
    reviewCount: 678,
    tags: ['allergy', 'antihistamine', 'rhinitis'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '25',
    name: 'Omeprazole 20mg',
    brand: 'Torrent',
    category: categories[0],
    subcategory: 'Gastric',
    description: 'Proton pump inhibitor for acid reflux, GERD, and peptic ulcers.',
    ingredients: ['Omeprazole 20mg'],
    dosage: '1 capsule daily before breakfast',
    price: 55,
    mrp: 62,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 90,
    isPrescriptionRequired: false,
    expiryDate: '2025-07-31',
    manufacturingDate: '2023-03-20',
    rating: 4.6,
    reviewCount: 543,
    tags: ['acid reflux', 'gastric', 'ulcer'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '26',
    name: 'Ibuprofen 400mg',
    brand: 'Abbott',
    category: categories[0],
    subcategory: 'Pain Relief',
    description: 'Non-steroidal anti-inflammatory drug for pain, fever, and inflammation.',
    ingredients: ['Ibuprofen 400mg'],
    dosage: '1 tablet 2-3 times daily after meals',
    price: 42,
    mrp: 48,
    discount: 12,
    images: [
      'https://images.pexels.com/photos/3683046/pexels-photo-3683046.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 110,
    isPrescriptionRequired: false,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-05',
    rating: 4.3,
    reviewCount: 789,
    tags: ['pain relief', 'anti-inflammatory', 'fever'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },

  // Health Supplements (12 products total)
  {
    id: '12',
    name: 'Vitamin D3 60K IU',
    brand: 'Mankind',
    category: categories[1],
    subcategory: 'Vitamins',
    description: 'High-potency Vitamin D3 supplement for bone health and immunity. Once weekly dosage.',
    ingredients: ['Cholecalciferol 60,000 IU'],
    dosage: '1 capsule weekly or as directed',
    price: 125,
    mrp: 140,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 85,
    isPrescriptionRequired: false,
    expiryDate: '2025-12-31',
    manufacturingDate: '2023-07-01',
    rating: 4.7,
    reviewCount: 1234,
    tags: ['vitamin d', 'bone health', 'immunity'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '13',
    name: 'Calcium + Magnesium + Zinc',
    brand: 'Carbamide Forte',
    category: categories[1],
    subcategory: 'Minerals',
    description: 'Complete bone health formula with Calcium, Magnesium, and Zinc for strong bones and teeth.',
    ingredients: ['Calcium Carbonate 500mg', 'Magnesium 200mg', 'Zinc 8mg'],
    dosage: '1-2 tablets daily after meals',
    price: 285,
    mrp: 320,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 65,
    isPrescriptionRequired: false,
    expiryDate: '2025-08-31',
    manufacturingDate: '2023-03-10',
    rating: 4.5,
    reviewCount: 789,
    tags: ['calcium', 'magnesium', 'zinc', 'bone health'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '14',
    name: 'Whey Protein Isolate',
    brand: 'MuscleBlaze',
    category: categories[1],
    subcategory: 'Protein',
    description: 'Premium whey protein isolate for muscle building and recovery. 25g protein per serving.',
    ingredients: ['Whey Protein Isolate', 'Natural Flavors', 'Stevia'],
    dosage: '1 scoop (30g) with 200ml water/milk',
    price: 2499,
    mrp: 2799,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 25,
    isPrescriptionRequired: false,
    expiryDate: '2025-06-30',
    manufacturingDate: '2023-08-15',
    rating: 4.6,
    reviewCount: 2156,
    tags: ['protein', 'muscle building', 'fitness', 'whey'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '15',
    name: 'Omega-3 Fish Oil',
    brand: 'HealthKart',
    category: categories[1],
    subcategory: 'Omega-3',
    description: 'Pure fish oil capsules rich in EPA and DHA for heart and brain health.',
    ingredients: ['Fish Oil 1000mg', 'EPA 180mg', 'DHA 120mg'],
    dosage: '1-2 capsules daily with meals',
    price: 599,
    mrp: 699,
    discount: 14,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 75,
    isPrescriptionRequired: false,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-20',
    rating: 4.4,
    reviewCount: 1567,
    tags: ['omega-3', 'fish oil', 'heart health', 'brain health'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '16',
    name: 'Probiotics Multi-Strain',
    brand: 'Yakult',
    category: categories[1],
    subcategory: 'Probiotics',
    description: 'Multi-strain probiotic supplement for digestive health and immunity support.',
    ingredients: ['Lactobacillus', 'Bifidobacterium', 'Prebiotic Fiber'],
    dosage: '1 capsule daily on empty stomach',
    price: 899,
    mrp: 999,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 45,
    isPrescriptionRequired: false,
    expiryDate: '2025-07-31',
    manufacturingDate: '2023-09-01',
    rating: 4.3,
    reviewCount: 678,
    tags: ['probiotics', 'digestive health', 'immunity', 'gut health'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '27',
    name: 'Vitamin C 1000mg',
    brand: 'Nature\'s Bounty',
    category: categories[1],
    subcategory: 'Vitamins',
    description: 'High-potency Vitamin C for immune support and antioxidant protection.',
    ingredients: ['Ascorbic Acid 1000mg', 'Rose Hips Extract'],
    dosage: '1 tablet daily with meals',
    price: 450,
    mrp: 520,
    discount: 13,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 95,
    isPrescriptionRequired: false,
    expiryDate: '2025-10-31',
    manufacturingDate: '2023-05-15',
    rating: 4.5,
    reviewCount: 892,
    tags: ['vitamin c', 'immunity', 'antioxidant'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '28',
    name: 'Iron + Folic Acid',
    brand: 'Himalaya',
    category: categories[1],
    subcategory: 'Minerals',
    description: 'Iron supplement with folic acid for anemia prevention and treatment.',
    ingredients: ['Ferrous Fumarate 200mg', 'Folic Acid 1.5mg'],
    dosage: '1 tablet daily after meals',
    price: 180,
    mrp: 200,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 120,
    isPrescriptionRequired: false,
    expiryDate: '2025-11-30',
    manufacturingDate: '2023-06-01',
    rating: 4.4,
    reviewCount: 567,
    tags: ['iron', 'folic acid', 'anemia', 'pregnancy'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '29',
    name: 'Multivitamin for Men',
    brand: 'Centrum',
    category: categories[1],
    subcategory: 'Vitamins',
    description: 'Complete multivitamin formula specially designed for men\'s nutritional needs.',
    ingredients: ['Vitamins A, C, D, E, B-Complex', 'Minerals', 'Antioxidants'],
    dosage: '1 tablet daily with breakfast',
    price: 650,
    mrp: 750,
    discount: 13,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 80,
    isPrescriptionRequired: false,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-10',
    rating: 4.6,
    reviewCount: 1234,
    tags: ['multivitamin', 'men\'s health', 'energy'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '30',
    name: 'Biotin 10000mcg',
    brand: 'WOW Life Science',
    category: categories[1],
    subcategory: 'Vitamins',
    description: 'High-potency biotin for healthy hair, skin, and nails.',
    ingredients: ['Biotin 10000mcg'],
    dosage: '1 capsule daily with water',
    price: 399,
    mrp: 450,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 70,
    isPrescriptionRequired: false,
    expiryDate: '2025-08-31',
    manufacturingDate: '2023-03-25',
    rating: 4.3,
    reviewCount: 678,
    tags: ['biotin', 'hair health', 'skin', 'nails'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '31',
    name: 'Magnesium Glycinate',
    brand: 'Solgar',
    category: categories[1],
    subcategory: 'Minerals',
    description: 'Highly absorbable magnesium for muscle and nerve function, sleep support.',
    ingredients: ['Magnesium Glycinate 400mg'],
    dosage: '1-2 capsules daily before bedtime',
    price: 850,
    mrp: 950,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 55,
    isPrescriptionRequired: false,
    expiryDate: '2025-12-31',
    manufacturingDate: '2023-07-20',
    rating: 4.7,
    reviewCount: 456,
    tags: ['magnesium', 'sleep', 'muscle health', 'stress'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '32',
    name: 'Collagen Peptides',
    brand: 'Oziva',
    category: categories[1],
    subcategory: 'Protein',
    description: 'Hydrolyzed collagen peptides for skin elasticity, joint health, and hair strength.',
    ingredients: ['Hydrolyzed Collagen Peptides', 'Vitamin C', 'Hyaluronic Acid'],
    dosage: '1 scoop daily in water or smoothie',
    price: 1299,
    mrp: 1499,
    discount: 13,
    images: [
      'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 40,
    isPrescriptionRequired: false,
    expiryDate: '2025-06-30',
    manufacturingDate: '2023-08-05',
    rating: 4.5,
    reviewCount: 789,
    tags: ['collagen', 'skin health', 'anti-aging', 'joints'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '33',
    name: 'Spirulina Tablets',
    brand: 'Organic India',
    category: categories[1],
    subcategory: 'Superfoods',
    description: 'Organic spirulina tablets rich in protein, vitamins, and minerals.',
    ingredients: ['Organic Spirulina 500mg'],
    dosage: '2-4 tablets daily with water',
    price: 550,
    mrp: 620,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 85,
    isPrescriptionRequired: false,
    expiryDate: '2025-10-31',
    manufacturingDate: '2023-05-10',
    rating: 4.4,
    reviewCount: 543,
    tags: ['spirulina', 'superfood', 'protein', 'detox'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },

  // Medical Devices (5 products total)
  {
    id: '8',
    name: 'Digital Thermometer',
    brand: 'Omron',
    category: categories[2],
    subcategory: 'Thermometer',
    description: 'Digital thermometer with fast and accurate readings. Large display with memory function.',
    ingredients: [],
    dosage: 'Follow instruction manual',
    price: 245,
    mrp: 280,
    discount: 12,
    images: [
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 35,
    isPrescriptionRequired: false,
    expiryDate: '2027-12-31',
    manufacturingDate: '2023-08-15',
    rating: 4.5,
    reviewCount: 487,
    tags: ['thermometer', 'digital', 'fever', 'temperature'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '17',
    name: 'Blood Pressure Monitor',
    brand: 'Omron',
    category: categories[2],
    subcategory: 'Blood Pressure Monitor',
    description: 'Automatic digital blood pressure monitor with large display and memory storage.',
    ingredients: [],
    dosage: 'Follow instruction manual',
    price: 1899,
    mrp: 2199,
    discount: 14,
    images: [
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 18,
    isPrescriptionRequired: false,
    expiryDate: '2027-12-31',
    manufacturingDate: '2023-09-10',
    rating: 4.7,
    reviewCount: 234,
    tags: ['blood pressure', 'monitor', 'digital', 'health'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '18',
    name: 'Pulse Oximeter',
    brand: 'BPL',
    category: categories[2],
    subcategory: 'Pulse Oximeter',
    description: 'Fingertip pulse oximeter for measuring oxygen saturation and pulse rate.',
    ingredients: [],
    dosage: 'Follow instruction manual',
    price: 1299,
    mrp: 1499,
    discount: 13,
    images: [
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 28,
    isPrescriptionRequired: false,
    expiryDate: '2027-12-31',
    manufacturingDate: '2023-07-20',
    rating: 4.6,
    reviewCount: 345,
    tags: ['pulse oximeter', 'oxygen', 'pulse', 'health monitoring'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '34',
    name: 'Glucometer with Strips',
    brand: 'Accu-Chek',
    category: categories[2],
    subcategory: 'Glucometer',
    description: 'Blood glucose monitoring system with 25 test strips for diabetes management.',
    ingredients: [],
    dosage: 'Follow instruction manual',
    price: 899,
    mrp: 1050,
    discount: 14,
    images: [
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 42,
    isPrescriptionRequired: false,
    expiryDate: '2027-12-31',
    manufacturingDate: '2023-06-15',
    rating: 4.5,
    reviewCount: 567,
    tags: ['glucometer', 'diabetes', 'blood sugar', 'monitoring'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '35',
    name: 'Nebulizer Machine',
    brand: 'Philips',
    category: categories[2],
    subcategory: 'Nebulizer',
    description: 'Compact nebulizer for respiratory therapy and asthma treatment.',
    ingredients: [],
    dosage: 'Follow instruction manual',
    price: 2499,
    mrp: 2899,
    discount: 14,
    images: [
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 15,
    isPrescriptionRequired: false,
    expiryDate: '2027-12-31',
    manufacturingDate: '2023-08-01',
    rating: 4.6,
    reviewCount: 234,
    tags: ['nebulizer', 'respiratory', 'asthma', 'therapy'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },

  // Personal Care (5 products total)
  {
    id: '7',
    name: 'Volini Pain Relief Gel',
    brand: 'Ranbaxy',
    category: categories[3],
    subcategory: 'Pain Relief',
    description: 'Topical pain relief gel for muscle and joint pain. Fast-acting formula for quick relief.',
    ingredients: ['Diclofenac Diethylammonium', 'Menthol', 'Methyl Salicylate'],
    dosage: 'Apply 2-3 times daily on affected area',
    price: 89,
    mrp: 98,
    discount: 9,
    images: [
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 95,
    isPrescriptionRequired: false,
    expiryDate: '2025-07-31',
    manufacturingDate: '2023-01-20',
    rating: 4.2,
    reviewCount: 1156,
    tags: ['pain relief', 'muscle pain', 'joint pain', 'topical'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '19',
    name: 'Hand Sanitizer 500ml',
    brand: 'Dettol',
    category: categories[3],
    subcategory: 'Sanitizers',
    description: 'Alcohol-based hand sanitizer with 70% alcohol. Kills 99.9% germs instantly.',
    ingredients: ['Ethyl Alcohol 70%', 'Glycerin', 'Hydrogen Peroxide'],
    dosage: 'Apply on hands and rub for 20 seconds',
    price: 149,
    mrp: 165,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 125,
    isPrescriptionRequired: false,
    expiryDate: '2025-12-31',
    manufacturingDate: '2023-06-01',
    rating: 4.4,
    reviewCount: 2345,
    tags: ['sanitizer', 'hand hygiene', 'alcohol', 'germs'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '20',
    name: 'Face Masks N95 (Pack of 10)',
    brand: '3M',
    category: categories[3],
    subcategory: 'Face Masks',
    description: 'N95 respirator face masks for protection against airborne particles. Pack of 10 masks.',
    ingredients: ['Non-woven Fabric', 'Melt-blown Filter'],
    dosage: 'Wear as needed for protection',
    price: 299,
    mrp: 350,
    discount: 15,
    images: [
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 85,
    isPrescriptionRequired: false,
    expiryDate: '2026-12-31',
    manufacturingDate: '2023-08-01',
    rating: 4.6,
    reviewCount: 1789,
    tags: ['face mask', 'n95', 'protection', 'safety'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '36',
    name: 'Antiseptic Liquid',
    brand: 'Savlon',
    category: categories[3],
    subcategory: 'Antiseptic',
    description: 'Antiseptic liquid for wound cleaning and disinfection. Gentle on skin.',
    ingredients: ['Chlorhexidine Gluconate', 'Cetrimide'],
    dosage: 'Dilute and apply on wounds or use for cleaning',
    price: 125,
    mrp: 140,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 90,
    isPrescriptionRequired: false,
    expiryDate: '2025-11-30',
    manufacturingDate: '2023-05-15',
    rating: 4.3,
    reviewCount: 678,
    tags: ['antiseptic', 'wound care', 'disinfection'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '37',
    name: 'Oral Rehydration Salts',
    brand: 'Electral',
    category: categories[3],
    subcategory: 'Oral Care',
    description: 'ORS powder for dehydration treatment. Essential electrolytes for quick recovery.',
    ingredients: ['Sodium Chloride', 'Potassium Chloride', 'Glucose', 'Sodium Citrate'],
    dosage: 'Mix 1 sachet in 200ml water and drink',
    price: 45,
    mrp: 50,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 150,
    isPrescriptionRequired: false,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-10',
    rating: 4.5,
    reviewCount: 892,
    tags: ['ors', 'dehydration', 'electrolytes', 'recovery'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },

  // Ayurvedic Products (5 products total)
  {
    id: '4',
    name: 'Dabur Chyawanprash',
    brand: 'Dabur',
    category: categories[4],
    subcategory: 'Immunity Boosters',
    description: 'Traditional Ayurvedic immunity booster with 40+ herbs. Builds immunity and provides energy.',
    ingredients: ['Amla', 'Ashwagandha', 'Giloy', '40+ Ayurvedic herbs'],
    dosage: '1-2 teaspoons daily',
    price: 285,
    mrp: 320,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 45,
    isPrescriptionRequired: false,
    expiryDate: '2025-10-31',
    manufacturingDate: '2023-02-01',
    rating: 4.6,
    reviewCount: 1875,
    tags: ['immunity', 'ayurvedic', 'energy', 'herbs'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '5',
    name: 'Himalaya Liv 52 DS',
    brand: 'Himalaya',
    category: categories[4],
    subcategory: 'Digestive Health',
    description: 'Ayurvedic liver support supplement. Helps maintain healthy liver function and digestion.',
    ingredients: ['Himsra', 'Kasani', 'Mandur bhasma', 'Kakamachi'],
    dosage: '2 tablets twice daily',
    price: 145,
    mrp: 160,
    discount: 9,
    images: [
      'https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 75,
    isPrescriptionRequired: false,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-15',
    rating: 4.4,
    reviewCount: 654,
    tags: ['liver', 'digestion', 'ayurvedic', 'detox'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '21',
    name: 'Patanjali Ashwagandha Capsules',
    brand: 'Patanjali',
    category: categories[4],
    subcategory: 'Stress Relief',
    description: 'Pure Ashwagandha capsules for stress relief, energy, and overall wellness.',
    ingredients: ['Ashwagandha Root Extract 500mg'],
    dosage: '1-2 capsules twice daily with milk',
    price: 199,
    mrp: 225,
    discount: 12,
    images: [
      'https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 65,
    isPrescriptionRequired: false,
    expiryDate: '2025-11-30',
    manufacturingDate: '2023-05-10',
    rating: 4.3,
    reviewCount: 892,
    tags: ['ashwagandha', 'stress relief', 'ayurvedic', 'energy'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '38',
    name: 'Triphala Churna',
    brand: 'Baidyanath',
    category: categories[4],
    subcategory: 'Digestive Health',
    description: 'Traditional Ayurvedic digestive tonic made from three fruits. Natural detoxifier.',
    ingredients: ['Amalaki', 'Bibhitaki', 'Haritaki'],
    dosage: '1 teaspoon with warm water before bedtime',
    price: 120,
    mrp: 135,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 85,
    isPrescriptionRequired: false,
    expiryDate: '2025-08-31',
    manufacturingDate: '2023-03-20',
    rating: 4.5,
    reviewCount: 567,
    tags: ['triphala', 'digestion', 'detox', 'ayurvedic'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '39',
    name: 'Giloy Tablets',
    brand: 'Himalaya',
    category: categories[4],
    subcategory: 'Immunity Boosters',
    description: 'Giloy tablets for immunity enhancement and fever management. Natural immunomodulator.',
    ingredients: ['Giloy Extract 250mg'],
    dosage: '1-2 tablets twice daily after meals',
    price: 165,
    mrp: 185,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 70,
    isPrescriptionRequired: false,
    expiryDate: '2025-10-31',
    manufacturingDate: '2023-05-05',
    rating: 4.4,
    reviewCount: 678,
    tags: ['giloy', 'immunity', 'fever', 'ayurvedic'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },

  // Baby Care (5 products total)
  {
    id: '6',
    name: 'Johnson\'s Baby Shampoo',
    brand: 'Johnson\'s',
    category: categories[5],
    subcategory: 'Baby Care',
    description: 'Gentle baby shampoo with no more tears formula. Clinically proven to be gentle on eyes.',
    ingredients: ['Aqua', 'Cocamidopropyl Betaine', 'Sodium Trideceth Sulfate'],
    dosage: 'Apply to wet hair, lather and rinse',
    price: 165,
    mrp: 185,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/3983221/pexels-photo-3983221.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 120,
    isPrescriptionRequired: false,
    expiryDate: '2025-11-30',
    manufacturingDate: '2023-06-01',
    rating: 4.8,
    reviewCount: 3241,
    tags: ['baby', 'gentle', 'no tears', 'shampoo'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '22',
    name: 'Johnson\'s Baby Powder',
    brand: 'Johnson\'s',
    category: categories[5],
    subcategory: 'Baby Care',
    description: 'Gentle baby powder that absorbs excess moisture and keeps baby\'s skin soft and dry.',
    ingredients: ['Talc', 'Fragrance', 'Zinc Stearate'],
    dosage: 'Apply gently on clean, dry skin',
    price: 145,
    mrp: 160,
    discount: 9,
    images: [
      'https://images.pexels.com/photos/6849267/pexels-photo-6849267.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 95,
    isPrescriptionRequired: false,
    expiryDate: '2025-10-31',
    manufacturingDate: '2023-04-15',
    rating: 4.7,
    reviewCount: 2156,
    tags: ['baby powder', 'gentle', 'moisture', 'soft skin'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '23',
    name: 'Pampers Baby Diapers (Medium)',
    brand: 'Pampers',
    category: categories[5],
    subcategory: 'Diapers',
    description: 'Ultra-soft diapers with 12-hour protection. 3 Extra Absorb Channels for better absorption.',
    ingredients: ['Super Absorbent Polymer', 'Non-woven Fabric'],
    dosage: 'Change as needed, up to 12 hours protection',
    price: 899,
    mrp: 999,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/3983221/pexels-photo-3983221.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 55,
    isPrescriptionRequired: false,
    expiryDate: '2026-12-31',
    manufacturingDate: '2023-09-01',
    rating: 4.6,
    reviewCount: 4567,
    tags: ['diapers', 'baby', 'protection', 'comfort'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '40',
    name: 'Cerelac Baby Food (Wheat)',
    brand: 'Nestle',
    category: categories[5],
    subcategory: 'Baby Food',
    description: 'Nutritious baby cereal fortified with iron and vitamins for healthy growth.',
    ingredients: ['Wheat Flour', 'Milk Solids', 'Iron', 'Vitamins'],
    dosage: 'Mix with warm water or milk as per instructions',
    price: 285,
    mrp: 320,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/6849267/pexels-photo-6849267.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 75,
    isPrescriptionRequired: false,
    expiryDate: '2025-08-31',
    manufacturingDate: '2023-03-15',
    rating: 4.5,
    reviewCount: 1234,
    tags: ['baby food', 'nutrition', 'cereal', 'growth'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '41',
    name: 'Himalaya Baby Lotion',
    brand: 'Himalaya',
    category: categories[5],
    subcategory: 'Baby Care',
    description: 'Gentle moisturizing lotion for baby\'s delicate skin with natural ingredients.',
    ingredients: ['Olive Oil', 'Almond Oil', 'Licorice', 'Milk Protein'],
    dosage: 'Apply gently on baby\'s skin after bath',
    price: 125,
    mrp: 140,
    discount: 11,
    images: [
      'https://images.pexels.com/photos/6849267/pexels-photo-6849267.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    inStock: true,
    stockCount: 85,
    isPrescriptionRequired: false,
    expiryDate: '2025-09-30',
    manufacturingDate: '2023-04-20',
    rating: 4.6,
    reviewCount: 892,
    tags: ['baby lotion', 'moisturizer', 'natural', 'gentle'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
];

export const featuredProducts = products.slice(0, 8);