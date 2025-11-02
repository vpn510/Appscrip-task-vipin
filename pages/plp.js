import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import styles from "@/styles/plp.module.css";

export default function PLP() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);

      // ✅ Build filters dynamically from data
      const uniqueCategories = [
        ...new Set(data.map((p) => p.category)),
      ].map((cat) => ({
        value: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
        checked: false,
      }));

      const filtersData = [
        {
          key: "category",
          label: "Category",
          options: uniqueCategories,
        },
        {
          key: "price",
          label: "Price Range",
          options: [
            { value: "0-50", label: "Below $50", checked: false },
            { value: "50-100", label: "$50 - $100", checked: false },
            { value: "100-200", label: "$100 - $200", checked: false },
            { value: "200+", label: "Above $200", checked: false },
          ],
        },
      ];

      setFilters(filtersData);
    }

    fetchProducts();
  }, []);

  // Handle Filter Change
  const handleFilterChange = (filterKey, value, checked) => {
    setFilters((prev) =>
      prev.map((f) =>
        f.key === filterKey
          ? {
            ...f,
            options: f.options.map((o) =>
              o.value === value ? { ...o, checked } : o
            ),
          }
          : f
      )
    );
  };

  // Apply filters
  useEffect(() => {
    if (!filters.length) return;

    let temp = [...products];

    // Category Filter
    const categoryFilter = filters.find((f) => f.key === "category");
    const selectedCategories =
      categoryFilter?.options
        .filter((opt) => opt.checked)
        .map((opt) => opt.value) || [];

    if (selectedCategories.length > 0) {
      temp = temp.filter((p) => selectedCategories.includes(p.category));
    }

    // Price Filter
    const priceFilter = filters.find((f) => f.key === "price");
    const selectedPrices =
      priceFilter?.options
        .filter((opt) => opt.checked)
        .map((opt) => opt.value) || [];

    if (selectedPrices.length > 0) {
      temp = temp.filter((p) => {
        const price = p.price;
        return selectedPrices.some((range) => {
          if (range === "0-50") return price < 50;
          if (range === "50-100") return price >= 50 && price < 100;
          if (range === "100-200") return price >= 100 && price < 200;
          if (range === "200+") return price >= 200;
          return true;
        });
      });
    }

    setFiltered(temp);
  }, [filters, products]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <section className={styles.productsSection}>
          <h1 className={styles.pageTitle}>Our Products</h1>
          {filtered.length === 0 ? (
            <p className={styles.noProducts}>No products found.</p>
          ) : (
            <div className={styles.productsGrid}>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
