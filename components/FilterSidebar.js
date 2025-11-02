import React from "react";
import styles from "../styles/filtersidebar.module.css";

const FilterSidebar = ({ filters = [], onFilterChange, isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Toggle button for mobile */}
      <button className={styles.filterToggle} onClick={toggleSidebar}>
        {isOpen ? "Close Filters ✖" : "Show Filters ⚙"}
      </button>

      <aside
        className={`${styles.filterSidebar} ${isOpen ? styles.show : ""}`}
      >
        <h2 className={styles.sidebarTitle}>Filter Products</h2>

        {filters && filters.length > 0 ? (
          filters.map((filter) => (
            <details
              key={filter.key}
              className={styles.filterSection}
              open
            >
              <summary>{filter.label}</summary>
              <div className={styles.filterOptions}>
                {filter.options.map((option) => (
                  <label key={option.value} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={option.checked || false}
                      onChange={(e) =>
                        onFilterChange(
                          filter.key,
                          option.value,
                          e.target.checked
                        )
                      }
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </details>
          ))
        ) : (
          <p style={{ color: "#aaa", marginTop: "10px" }}>Loading filters...</p>
        )}
      </aside>
    </>
  );
};

export default FilterSidebar;
