class UrlParser {
    parseUrl(urlFormat, urlInstance) {
      if (urlFormat == null || urlInstance == null)
        throw new Error("Invalid URL instance")
      
      const pathObj = this.parsePath(urlFormat, urlInstance);
      const queryObj = this.parseQuery(urlInstance);
      
      return {
        ...pathObj,
        ...queryObj
      };
    }
    
    parsePath(urlFormat, urlInstance) {
      const pathKeys = this.getFormatArray(urlFormat);
      const pathValues = this.getPathParamsArray(urlInstance);
      
      const object = {};
      pathKeys.forEach((key, index) => {
        if (key.startsWith(":")) {
          const k = key.slice(1)

          object[k] = pathValues[index];
        }
      })
      
      return object;
    }
    
    parseQuery(urlInstance) {
      const queryParams = this.getQueryParamsArray(urlInstance);
      
      const object = {};
      queryParams.forEach(q => {
        const splitQueryParam = q.split("=");
        
        object[splitQueryParam[0]] = splitQueryParam[1];
      })
      
      return object;
    }
    
    getFormatArray(urlFormat) {
      return urlFormat.split("/").filter(p => p);
    }
    
    getPathParamsArray(urlInstance) {
      const pathParams = urlInstance.split("?")[0];
      
      return pathParams?.split("/").filter(p => p);
    }
    
    getQueryParamsArray(urlInstance) {
      const queryParams = urlInstance.split("?")[1];
      
      return queryParams?.split("&");
    }
  }

  const urlForm = "/:version/api/:collection/:id"
  const urlInst = "/6/api/listings/3?sort=desc&limit=10"
  
  const parser = new UrlParser();
  
  parser.parseUrl(urlForm, urlInst);