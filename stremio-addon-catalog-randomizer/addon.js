const { addonBuilder, serveHTTP } = require("stremio-addon-sdk")

var _ = require("underscore");

const https = require('https')

setInterval(() => {
	https.get('https://stremio-addon-catalog-randomizer.onrender.com/manifest.json')
}, 299000)

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
    "id": "community.catalograndomizer",
    "version": "0.0.1",
    "catalogs": [
        { 
            "id": "series-randomized", 
            "type": "series", 
            "name": "🔀",
            "extra": [
                { "name": "search", "isRequired": true }
            ]    
        }
    ],
    "resources": [
        "catalog",
        {
            "name": "meta",
            "types": ["series"],
            "idPrefixes": ["🔀"]
        }
    ],
    "types": ["series"],
    "name": "CatalogRandomizer",
    "description": "",
    "idPrefixes": [
        "tt"
    ]
}
const builder = new addonBuilder(manifest)

var needle = require('needle')

async function getSeriesCatalog(searchQuery) {
    listEndpoint = 'https://v3-cinemeta.strem.io'
    const getUrl = listEndpoint + '/catalog/series/top/search=' + searchQuery + '.json'
    response = await needle('get', getUrl)
    metas = response.body['metas']

    return metas
        .map((meta) => { 
            meta['id'] = '🔀' + meta['id']
            return meta
        })     
}

builder.defineCatalogHandler(async ({ id, type, extra }) => {
    if (type != "series") {
        throw new Error('unsupported')
        
    }
    if (id != "series-randomized") {
        throw new Error('unsupported')
    }

    if (extra.search == null) {
        throw new Error('unsupported')
    }

    return {metas: await getSeriesCatalog(extra.search)}
})

async function getSeriesMeta(id) {
    // const metas = {
    //     hiwrld_jellyfish: {
    //         id: "hiwrld_jellyfish",
    //         type: "movie",
    //         name: "Jellyfish",
    //         poster: "https://images.unsplash.com/photo-1496108493338-3b30de66f9be",
    //         genres: ["Demo", "Nature"],
    //         description: "A .mkv video clip useful for testing the network streaming and playback performance of media streamers & HTPCs.",
    //         cast: ["Some random jellyfishes"],
    //         director: ["ScottAllyn"],
    //         logo: "https://b.kisscc0.com/20180705/yee/kisscc0-art-forms-in-nature-jellyfish-recapitulation-theor-jellyfish-5b3dcabcb00692.802484341530776252721.png",
    //         background: "https://images.unsplash.com/photo-1461783470466-185038239ee3",
    //         runtime: "30 sec"
    //     },
    // }

    listEndpoint = 'https://v3-cinemeta.strem.io'
    const getUrl = listEndpoint + '/meta/series/' + id.replace('🔀', '') + '.json'
    console.log(getUrl)
    response = await needle('get', getUrl)
    meta = response.body['meta']

    meta['videos'] = _.shuffle(meta['videos'])
        .filter((video) => (video['season'] != 0))
        .map((video) => { 
            video['season'] = 1
            return video
        })
        .map((video, index) => { 
            video['episode'] = index + 1
            video['number'] = index + 1
            return video
        })

    return meta
        
}

builder.defineMetaHandler(async ({type, id}) => {
    if (type != 'series') {
        throw new Error('unsupported')
    }

    return {meta: await getSeriesMeta(id)}
})

module.exports = builder.getInterface()
