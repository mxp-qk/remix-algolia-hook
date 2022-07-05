
# Remix Algolia Hook

This project implement a search page powered by Algolia using the Remix Run framework. It is based  on the latest React hook library from Algoli.

The use case consist of a search page with :
- a search box and refinements list for Algolia search
- a list of result obtain from Algolia
- a details section that will display more details of a result obtain from an internal API

## Why
To provide a seamless search experience 

## How
Fast search experiences with : 
- Remix Run server side rendering
- Algolia new React Library and server state possibilities
- URL matching the search state for easy sharing
  
Fetched on demand more data with :
- Remix useFetcher hook

## The issue
The routing attribute of ```<InstanteSearch>``` Algolia's component require the use of an history router when render inside a ```<InstantSearchSSRProvider>``` (see [doc](https://www.algolia.com/doc/api-reference/widgets/history-router/react-hooks/)).
This router will update the browser url to match the search query and refinements list.

But when a fetch request is triggered by the ```useFetcher``` Remix's hook it will push an new url with no search parameters. After that the search box and refinement list cannot be used anymore and an error is thrown by the instantesearch.js library : 

```
Uncaught Error: Cannot refine the undeclared facet color; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets
    at SearchParameters.toggleFacetRefinement (chunk-HAOYTUSA.js:726:15)
    at AlgoliaSearchHelper.toggleFacetRefinement (chunk-HAOYTUSA.js:2412:39)
    at triggerRefine2 (chunk-HAOYTUSA.js:7837:20)
    at onRefine (chunk-QCPXHG6F.js:332:5)
    at onChange (chunk-QCPXHG6F.js:172:9)
    at HTMLUnknownElement.callCallback2 (entry.client-ENIZ4UN3.js:3680:22)
    at Object.invokeGuardedCallbackDev (entry.client-ENIZ4UN3.js:3705:24)
    at invokeGuardedCallback (entry.client-ENIZ4UN3.js:3739:39)
    at invokeGuardedCallbackAndCatchFirstError (entry.client-ENIZ4UN3.js:3742:33)
    at executeDispatch (entry.client-ENIZ4UN3.js:6365:11)
```

A patch is applied to the instantseach.js library to log each new state push to the browser url.

## Try it

Locally 
```terminal
npm install
npm run dev
```

or

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/remix-algolia-hook-ulbwcw)