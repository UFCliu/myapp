Handlebars.registerHelper('pp', function(json, options) {
    return JSON.stringify(json);
  });

  Handlebars.registerHelper("formatPrice", function(price, options) {
    var formatedPrice, roundedPrice;
    if ((price == null) || price < 0) {
      return;
    }
    formatedPrice = (price / 100).toFixed(2);
    roundedPrice = parseInt(price / 100).toFixed(2);
    if (formatedPrice == roundedPrice) {
      return roundedPrice;
    } else {
      return formatedPrice;
    }
  });

  Handlebars.registerHelper("formatPriceAll", function(price, options) {
    var formatedPrice, roundedPrice;
    if (price == null) {
      return;
    }
    formatedPrice = (price / 100).toFixed(2);
    roundedPrice = parseInt(price / 100).toFixed(2);
    if (formatedPrice == roundedPrice) {
      return roundedPrice;
    } else {
      return formatedPrice;
    }
  });

  Handlebars.registerHelper("divide", function(divide, options) {
    return divide / 10;
  });

  Handlebars.registerHelper('add', function(a, b, options) {
    return a + b;
  });

  Handlebars.registerHelper("lt", function(a, b, options) {
    if (a < b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("gt", function(a, b, options) {
    if (a > b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("minus", function(a, b, options) {
    return a - b;
  });

  Handlebars.registerHelper('mod', function(a, b, options) {
    if ((a + 1) % b !== 0) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  Handlebars.registerHelper('of', function(a, b, options) {
    var values;
    values = b.split(",");
    if (_.contains(values, a)) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("formatDate", function(date, type, options) {
    if (!date) {
      return;
    }
    switch (type) {
      case "min":
        return moment(parseInt(date)).format("YYYY-MM-DD HH:mm");
      case "gmt":
        return moment(parseInt(date)).format("EEE MMM dd HH:mm:ss Z yyyy");
      case "day":
        return moment(parseInt(date)).format("YYYY-MM-DD");
      default:
        return moment(parseInt(date)).format("YYYY-MM-DD HH:mm:ss");
    }
  });