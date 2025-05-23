import Button from "@/components/ui/button";

const FILTER_CATS = [
  {
    id: "all",
    label: "All",
    isActive: true,
  },
  {
    id: "bags",
    label: "Bags",
    isActive: false,
  },
  {
    id: "food",
    label: "Food",
    isActive: false,
  },
  {
    id: "books",
    label: "Books",
    isActive: false,
  },
  {
    id: "clothes",
    label: "Clothes",
    isActive: false,
  },
  {
    id: "grocery",
    label: "Grocery",
    isActive: false,
  },
  {
    id: "furniture",
    label: "Furniture",
    isActive: false,
  },
  {
    id: "baby_care",
    label: "Baby care",
    isActive: false,
  },
  {
    id: "stationery",
    label: "Stationery",
    isActive: false,
  },
  {
    id: "beauty_makeup",
    label: "Beauty & Makeup",
    isActive: false,
  },
];

const ProductsFilter = () => {
  return (
    <section id="filter" className="my-7">
      <div className="flex items-center gap-x-7 overflow-x-scroll hide-scroll-bar">
        {FILTER_CATS.map((cat) => (
          <Button
            theme={cat.isActive ? "filterPill" : "ghostPill"}
            key={cat.id}
          >
            {cat.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ProductsFilter;
