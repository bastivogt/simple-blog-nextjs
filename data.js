const BlogData = {
  blogs: [
    {
      id: 1,
      title: "Mein erster Blogeintrag",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      image: "/images/trees-3822149_1280.jpg",
      date: "2023-12-05",
      featured: true,
    },
    {
      id: 2,
      title: "Mein Geburtstag",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      image: "/images/elephant-1822636_1280.jpg",
      date: "2023-02-27",
      featured: true,
    },
    {
      id: 3,
      title: "Ute Geburtstag",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      image: "/images/butterflies-1127666_1280.jpg",
      date: "2023-07-27",
      featured: false,
    },
    {
      id: 4,
      title: "Noah Geburtstag",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      image: "/images/benches-560435_1280.jpg",
      date: "2023-12-05",
      featured: false,
    },
    {
      id: 5,
      title: "Ikke B-Day vor einem Jahr",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      image: "/images/benches-560435_1280.jpg",
      date: "2022-02-27",
      featured: false,
    },
  ],

  getFeatured() {
    return this.blogs.filter((item) => item.featured === true);
  },

  getFeaturedSortedByDate(asc = true) {
    return this.getAllSortedByDate(asc).filter(
      (item) => item.featured === true
    );
  },

  getAll() {
    return this.blogs;
  },

  getAllSortedByDate(asc = true) {
    return this.blogs.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (asc) {
        return dateA - dateB;
      }
      return dateB - dateA;
    });
  },

  getEntryById(id) {
    return this.blogs.find((item) => item.id === id);
  },

  getYears() {
    const y = new Set();
    this.blogs.forEach((item) => {
      y.add(new Date(item.date).getFullYear());
    });
    return Array.from(y).sort((a, b) => a - b);
  },

  getMonths() {
    const m = new Set();
    this.blogs.forEach((item) => {
      m.add(new Date(item.date).getMonth() + 1);
    });
    return Array.from(m).sort((a, b) => a - b);
  },

  getYearsAndMonths() {
    const arr = [];
    this.blogs.forEach((item) => {
      const y = new Date(item.date).getFullYear().toString();
      const m = (new Date(item.date).getMonth() + 1).toString();

      if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].year !== y) {
            arr.push({ year: y, months: new Set([m]) });
          } else {
            arr[i].months.add(m);
          }
        }
      } else {
        arr.push({ year: y, months: new Set([m]) });
      }
    });
    return arr;
  },

  getYearsAndMonthsSorted() {
    const orgArr = this.getYearsAndMonths();
    orgArr.sort((a, b) => a.year - b.year);
    const newArr = [];

    orgArr.forEach((item) => {
      newArr.push({
        year: item.year,
        months: Array.from(item.months).sort((a, b) => a - b),
      });
    });
    return newArr;
  },

  getDateFilteredEntries(year, month) {
    return this.blogs.filter((item) => {
      const itemDate = new Date(item.date);
      const itemYear = itemDate.getFullYear();
      const itemMonth = itemDate.getMonth() + 1;

      if (itemYear === year && itemMonth === month) {
        return item;
      }
      return undefined;
    });
  },
};

export default BlogData;
