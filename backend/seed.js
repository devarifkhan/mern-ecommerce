import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config({ path: "./backend/.env" });

const products = [
	// Jeans
	{
		name: "Slim Fit Dark Wash Jeans",
		description: "Classic slim fit jeans in a dark wash, perfect for casual and semi-formal occasions.",
		price: 59.99,
		image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
		category: "jeans",
		isFeatured: true,
	},
	{
		name: "Relaxed Fit Straight Jeans",
		description: "Comfortable relaxed fit jeans with a straight leg cut, ideal for everyday wear.",
		price: 49.99,
		image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500",
		category: "jeans",
		isFeatured: false,
	},
	{
		name: "Skinny Ripped Jeans",
		description: "Trendy skinny jeans with subtle rips for a fashionable streetwear look.",
		price: 54.99,
		image: "https://images.unsplash.com/photo-1604176424472-17cd740f74e9?w=500",
		category: "jeans",
		isFeatured: false,
	},

	// T-Shirts
	{
		name: "Classic White Crew Neck Tee",
		description: "A timeless white crew neck t-shirt made from 100% premium cotton.",
		price: 24.99,
		image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
		category: "t-shirts",
		isFeatured: true,
	},
	{
		name: "Graphic Print Oversized Tee",
		description: "Bold graphic print oversized t-shirt for a trendy streetwear aesthetic.",
		price: 29.99,
		image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
		category: "t-shirts",
		isFeatured: false,
	},
	{
		name: "Striped Pocket Tee",
		description: "Lightweight striped t-shirt with a small chest pocket, perfect for summer.",
		price: 22.99,
		image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c73?w=500",
		category: "t-shirts",
		isFeatured: false,
	},

	// Shoes
	{
		name: "Classic White Sneakers",
		description: "Minimalist white leather sneakers that go with any outfit.",
		price: 89.99,
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
		category: "shoes",
		isFeatured: true,
	},
	{
		name: "Running Performance Shoes",
		description: "Lightweight and breathable running shoes with superior cushioning.",
		price: 119.99,
		image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
		category: "shoes",
		isFeatured: false,
	},
	{
		name: "Chelsea Ankle Boots",
		description: "Sleek Chelsea boots in genuine leather, perfect for a polished look.",
		price: 149.99,
		image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500",
		category: "shoes",
		isFeatured: true,
	},

	// Glasses
	{
		name: "Aviator Sunglasses",
		description: "Classic aviator sunglasses with UV400 protection and metal frame.",
		price: 39.99,
		image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
		category: "glasses",
		isFeatured: false,
	},
	{
		name: "Round Retro Sunglasses",
		description: "Vintage-inspired round frame sunglasses with polarized lenses.",
		price: 34.99,
		image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
		category: "glasses",
		isFeatured: true,
	},

	// Jackets
	{
		name: "Leather Biker Jacket",
		description: "Premium genuine leather biker jacket with zip detailing and a slim fit.",
		price: 199.99,
		image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
		category: "jackets",
		isFeatured: true,
	},
	{
		name: "Puffer Winter Jacket",
		description: "Warm and lightweight puffer jacket with a water-resistant outer shell.",
		price: 129.99,
		image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
		category: "jackets",
		isFeatured: false,
	},
	{
		name: "Denim Trucker Jacket",
		description: "Casual denim trucker jacket, a wardrobe staple for all seasons.",
		price: 79.99,
		image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
		category: "jackets",
		isFeatured: false,
	},

	// Suits
	{
		name: "Slim Fit Navy Suit",
		description: "Elegant slim fit two-piece suit in navy blue, perfect for formal events.",
		price: 299.99,
		image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4685?w=500",
		category: "suits",
		isFeatured: true,
	},
	{
		name: "Charcoal Grey Business Suit",
		description: "Classic charcoal grey suit with a tailored fit, ideal for the modern professional.",
		price: 279.99,
		image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
		category: "suits",
		isFeatured: false,
	},

	// Bags
	{
		name: "Leather Crossbody Bag",
		description: "Compact genuine leather crossbody bag with adjustable strap and multiple pockets.",
		price: 69.99,
		image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
		category: "bags",
		isFeatured: true,
	},
	{
		name: "Canvas Backpack",
		description: "Durable canvas backpack with laptop compartment, ideal for work or travel.",
		price: 59.99,
		image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
		category: "bags",
		isFeatured: false,
	},
	{
		name: "Tote Shoulder Bag",
		description: "Spacious tote bag in vegan leather, great for daily use and shopping.",
		price: 44.99,
		image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
		category: "bags",
		isFeatured: false,
	},
];

const seed = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB connected");

		await Product.deleteMany({});
		console.log("Existing products cleared");

		await Product.insertMany(products);
		console.log(`${products.length} products seeded successfully`);
	} catch (error) {
		console.error("Seeding failed:", error.message);
	} finally {
		await mongoose.disconnect();
		console.log("MongoDB disconnected");
		process.exit(0);
	}
};

seed();
