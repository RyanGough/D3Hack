var crudeOilData = [
    {date:"01/01/1861", price: 0.49, adjustedPrice: 12},
    {date:"01/01/1862", price: 1.05, adjustedPrice: 23},
    {date:"01/01/1863", price: 3.15, adjustedPrice: 55},
    {date:"01/01/1864", price: 8.06, adjustedPrice: 111},
    {date:"01/01/1865", price: 6.59, adjustedPrice: 93},
    {date:"01/01/1866", price: 3.74, adjustedPrice: 55},
    {date:"01/01/1867", price: 2.41, adjustedPrice: 37},
    {date:"01/01/1868", price: 3.63, adjustedPrice: 59},
    {date:"01/01/1869", price: 3.64, adjustedPrice: 59},
    {date:"01/01/1870", price: 3.86, adjustedPrice: 66},
    {date:"01/01/1871", price: 4.34, adjustedPrice: 78},
    {date:"01/01/1872", price: 3.64, adjustedPrice: 66},
    {date:"01/01/1873", price: 1.83, adjustedPrice: 33},
    {date:"01/01/1874", price: 1.17, adjustedPrice: 22},
    {date:"01/01/1875", price: 1.35, adjustedPrice: 27},
    {date:"01/01/1876", price: 2.56, adjustedPrice: 52},
    {date:"01/01/1877", price: 2.42, adjustedPrice: 49},
    {date:"01/01/1878", price: 1.19, adjustedPrice: 27},
    {date:"01/01/1879", price: 0.86, adjustedPrice: 20},
    {date:"01/01/1880", price: 0.95, adjustedPrice: 21},
    {date:"01/01/1881", price: 0.86, adjustedPrice: 19},
    {date:"01/01/1882", price: 0.78, adjustedPrice: 17},
    {date:"01/01/1883", price: 1.00, adjustedPrice: 23},
    {date:"01/01/1884", price: 0.84, adjustedPrice: 20},
    {date:"01/01/1885", price: 0.88, adjustedPrice: 21},
    {date:"01/01/1886", price: 0.71, adjustedPrice: 17},
    {date:"01/01/1887", price: 0.67, adjustedPrice: 16},
    {date:"01/01/1888", price: 0.88, adjustedPrice: 21},
    {date:"01/01/1889", price: 0.94, adjustedPrice: 23},
    {date:"01/01/1890", price: 0.87, adjustedPrice: 21},
    {date:"01/01/1891", price: 0.67, adjustedPrice: 16},
    {date:"01/01/1892", price: 0.56, adjustedPrice: 13},
    {date:"01/01/1893", price: 0.64, adjustedPrice: 15},
    {date:"01/01/1894", price: 0.84, adjustedPrice: 21},
    {date:"01/01/1895", price: 1.36, adjustedPrice: 35},
    {date:"01/01/1896", price: 1.18, adjustedPrice: 31},
    {date:"01/01/1897", price: 0.79, adjustedPrice: 20},
    {date:"01/01/1898", price: 0.91, adjustedPrice: 24},
    {date:"01/01/1899", price: 1.29, adjustedPrice: 33},
    {date:"01/01/1900", price: 1.19, adjustedPrice: 31},
    {date:"01/01/1901", price: 0.96, adjustedPrice: 25},
    {date:"01/01/1902", price: 0.80, adjustedPrice: 20},
    {date:"01/01/1903", price: 0.94, adjustedPrice: 23},
    {date:"01/01/1904", price: 0.86, adjustedPrice: 21},
    {date:"01/01/1905", price: 0.62, adjustedPrice: 15},
    {date:"01/01/1906", price: 0.73, adjustedPrice: 18},
    {date:"01/01/1907", price: 0.72, adjustedPrice: 17},
    {date:"01/01/1908", price: 0.72, adjustedPrice: 17},
    {date:"01/01/1909", price: 0.70, adjustedPrice: 17},
    {date:"01/01/1910", price: 0.61, adjustedPrice: 14},
    {date:"01/01/1911", price: 0.61, adjustedPrice: 14},
    {date:"01/01/1912", price: 0.74, adjustedPrice: 17},
    {date:"01/01/1913", price: 0.95, adjustedPrice: 21},
    {date:"01/01/1914", price: 0.81, adjustedPrice: 17},
    {date:"01/01/1915", price: 0.64, adjustedPrice: 14},
    {date:"01/01/1916", price: 1.10, adjustedPrice: 22},
    {date:"01/01/1917", price: 1.56, adjustedPrice: 26},
    {date:"01/01/1918", price: 1.98, adjustedPrice: 29},
    {date:"01/01/1919", price: 2.01, adjustedPrice: 25},
    {date:"01/01/1920", price: 3.07, adjustedPrice: 33},
    {date:"01/01/1921", price: 1.73, adjustedPrice: 21},
    {date:"01/01/1922", price: 1.61, adjustedPrice: 21},
    {date:"01/01/1923", price: 1.34, adjustedPrice: 17},
    {date:"01/01/1924", price: 1.43, adjustedPrice: 18},
    {date:"01/01/1925", price: 1.68, adjustedPrice: 21},
    {date:"01/01/1926", price: 1.88, adjustedPrice: 23},
    {date:"01/01/1927", price: 1.30, adjustedPrice: 16},
    {date:"01/01/1928", price: 1.17, adjustedPrice: 15},
    {date:"01/01/1929", price: 1.27, adjustedPrice: 16},
    {date:"01/01/1930", price: 1.19, adjustedPrice: 15},
    {date:"01/01/1931", price: 0.65, adjustedPrice: 9},
    {date:"01/01/1932", price: 0.87, adjustedPrice: 14},
    {date:"01/01/1933", price: 0.67, adjustedPrice: 11},
    {date:"01/01/1934", price: 1.00, adjustedPrice: 16},
    {date:"01/01/1935", price: 0.97, adjustedPrice: 15},
    {date:"01/01/1936", price: 1.09, adjustedPrice: 17},
    {date:"01/01/1937", price: 1.18, adjustedPrice: 18},
    {date:"01/01/1938", price: 1.13, adjustedPrice: 17},
    {date:"01/01/1939", price: 1.02, adjustedPrice: 16},
    {date:"01/01/1940", price: 1.02, adjustedPrice: 16},
    {date:"01/01/1941", price: 1.14, adjustedPrice: 17},
    {date:"01/01/1942", price: 1.19, adjustedPrice: 16},
    {date:"01/01/1943", price: 1.20, adjustedPrice: 15},
    {date:"01/01/1944", price: 1.21, adjustedPrice: 15},
    {date:"01/01/1945", price: 1.05, adjustedPrice: 13},
    {date:"01/01/1946", price: 1.12, adjustedPrice: 12},
    {date:"01/01/1947", price: 1.90, adjustedPrice: 18},
    {date:"01/01/1948", price: 1.99, adjustedPrice: 18},
    {date:"01/01/1949", price: 1.78, adjustedPrice: 16},
    {date:"01/01/1950", price: 1.71, adjustedPrice: 15},
    {date:"01/01/1951", price: 1.71, adjustedPrice: 14},
    {date:"01/01/1952", price: 1.71, adjustedPrice: 14},
    {date:"01/01/1953", price: 1.93, adjustedPrice: 16},
    {date:"01/01/1954", price: 1.93, adjustedPrice: 16},
    {date:"01/01/1955", price: 1.93, adjustedPrice: 16},
    {date:"01/01/1956", price: 1.93, adjustedPrice: 15},
    {date:"01/01/1957", price: 1.90, adjustedPrice: 15},
    {date:"01/01/1958", price: 2.08, adjustedPrice: 16},
    {date:"01/01/1959", price: 2.08, adjustedPrice: 15},
    {date:"01/01/1960", price: 1.90, adjustedPrice: 14},
    {date:"01/01/1961", price: 1.80, adjustedPrice: 13},
    {date:"01/01/1962", price: 1.80, adjustedPrice: 13},
    {date:"01/01/1963", price: 1.80, adjustedPrice: 13},
    {date:"01/01/1964", price: 1.80, adjustedPrice: 13},
    {date:"01/01/1965", price: 1.80, adjustedPrice: 12},
    {date:"01/01/1966", price: 1.80, adjustedPrice: 12},
    {date:"01/01/1967", price: 1.80, adjustedPrice: 12},
    {date:"01/01/1968", price: 1.80, adjustedPrice: 11},
    {date:"01/01/1969", price: 1.80, adjustedPrice: 11},
    {date:"01/01/1970", price: 1.80, adjustedPrice: 10},
    {date:"01/01/1971", price: 2.24, adjustedPrice: 12},
    {date:"01/01/1972", price: 2.48, adjustedPrice: 13},
    {date:"01/01/1973", price: 3.29, adjustedPrice: 16},
    {date:"01/01/1974", price: 11.58 , adjustedPrice: 51},
    {date:"01/01/1975", price: 11.53 , adjustedPrice: 46},
    {date:"01/01/1976", price: 12.80 , adjustedPrice: 49},
    {date:"01/01/1977", price: 13.92 , adjustedPrice: 50},
    {date:"01/01/1978", price: 14.02 , adjustedPrice: 46},
    {date:"01/01/1979", price: 31.61 , adjustedPrice: 94},
    {date:"01/01/1980", price: 36.83 , adjustedPrice: 97},
    {date:"01/01/1981", price: 35.93 , adjustedPrice: 85},
    {date:"01/01/1982", price: 32.97 , adjustedPrice: 74},
    {date:"01/01/1983", price: 29.55 , adjustedPrice: 64},
    {date:"01/01/1984", price: 28.78 , adjustedPrice: 58},
    {date:"01/01/1985", price: 27.56 , adjustedPrice: 55},
    {date:"01/01/1986", price: 14.43 , adjustedPrice: 28},
    {date:"01/01/1987", price: 18.44 , adjustedPrice: 35},
    {date:"01/01/1988", price: 14.92 , adjustedPrice: 27},
    {date:"01/01/1989", price: 18.23 , adjustedPrice: 32},
    {date:"01/01/1990", price: 23.73 , adjustedPrice: 39},
    {date:"01/01/1991", price: 20.00 , adjustedPrice: 32},
    {date:"01/01/1992", price: 19.32 , adjustedPrice: 30},
    {date:"01/01/1993", price: 16.97 , adjustedPrice: 25},
    {date:"01/01/1994", price: 15.82 , adjustedPrice: 23},
    {date:"01/01/1995", price: 17.02 , adjustedPrice: 24},
    {date:"01/01/1996", price: 20.67 , adjustedPrice: 29},
    {date:"01/01/1997", price: 19.09 , adjustedPrice: 26},
    {date:"01/01/1998", price: 12.72 , adjustedPrice: 17},
    {date:"01/01/1999", price: 17.97 , adjustedPrice: 24},
    {date:"01/01/2000", price: 28.50 , adjustedPrice: 36},
    {date:"01/01/2001", price: 24.44 , adjustedPrice: 30},
    {date:"01/01/2002", price: 25.02 , adjustedPrice: 30},
    {date:"01/01/2003", price: 28.83 , adjustedPrice: 34},
    {date:"01/01/2004", price: 38.27 , adjustedPrice: 44},
    {date:"01/01/2005", price: 54.52 , adjustedPrice: 60},
    {date:"01/01/2006", price: 65.14 , adjustedPrice: 70},
    {date:"01/01/2007", price: 72.39 , adjustedPrice: 75},
    {date:"01/01/2008", price: 97.26 , adjustedPrice: 97}
]
