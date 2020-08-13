import { writable } from 'svelte/store';

export const deals = writable([
	{
		id: '12345',
		title: '£2.50 off Buffalo Chicken Pizza!',
		imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/farmhouse.7f5f2772e4142c045027ff7688332f4e.1.jpg?width=300',
		code: 'DISCOUNT',
		products: ['visa-buffalo-chicken-pizza'],
		productTypes: [],
		baseDiscount: 2.5,
		percentDiscount: 0,
		isApplied: false		
	},
	{
		id: '12345',
		title: '50% off vegetarian pizzas!',
		imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.1988ef35a9d0f61e3894a3b2f4a5a523.1.jpg?width=300',
		code: 'VEGGIE',
		products: [],
		productTypes: ['works'],
		baseDiscount: 0,
		percentDiscount: 50,
		isApplied: false		
	},
]);

export const products = writable({

	'visas': [
		{
			id: 'visa-tier-5',
			title: 'Tier-5 Youth Mobility',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/bbq-meatfeast.3d8f226e11170a7e46f86165962f3087.1.jpg?width=300',
			purchasables: [
				{
					id: '001',
					title: 'Checking only',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '002',
					title: 'Full assistance',
					price: 12,
					requires: [],
					disabled: false
				}
      		],
			sale: '50% off regular price',
			hasMemberPrice: false,
			isInCart: false,
			wholeProductDisabled: false
		},
		{
			id: 'uk-ancestry',
			title: 'UK Ancestry',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/buffalo-chicken.2f80cb8f1c1774c4ef27197020895c02.1.jpg?width=300',
			purchasables: [
				{
					id: '003',
					title: 'Checking only',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '004',
					title: 'Full assistance',
					price: 12,
					requires: [],
					disabled: false
				}
			],
			sale: '£5 off regular price',
			hasMemberPrice: false,
			isInCart: false,
			wholeProductDisabled: false
		},
		{
			id: 'uk-ancestry-plus-partner',
			title: 'UK Ancestry plus Partner',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/buffalo-chicken.2f80cb8f1c1774c4ef27197020895c02.1.jpg?width=300',
			purchasables: [
				{
					id: '005',
					title: 'Checking only',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '006',
					title: 'Full assistance',
					price: 12,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'visa-priority-service',
			title: 'Priority Service',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/meaty-one.6ec39db52b05a9a113d2a8b8f41a5384.1.jpg?width=300',
			purchasables: [
				{
					id: '007',
					title: 'Tier-5 Youth Mobility',
					price: 10,
					requires: ['visa-tier-5'],
					disabled: true
				},
				{
					id: '008',
					title: 'UK Ancestry',
					price: 12,
					requires: ['uk-ancestry', 'uk-ancestry-plus-partner'],
					disabled: true
				},
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: true
		},
	],

	'works': [
		{
			id: 'live-in-pub-placement',
			title: 'Live-in Pub Placement',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '009',
					title: 'Live-in Pub Placement',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'live-in-carer-placement',
			title: 'Live-in Carer Placement',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '010',
					title: 'Live-in Carer Placement',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'live-in-childcare',
			title: 'Live-in Childcare',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '011',
					title: 'Live-in Childcare Placement',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'hospitality-placement',
			title: 'Hospitality Placement',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '012',
					title: 'Hospitality Placement',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
	],

	'relocations': [
		{
			id: 'e-bank-account',
			title: 'e-Bank Account',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '023',
					title: 'Monese',
					price: 10,
					requires: [],
					disabled: true
				},
				{
					id: '024',
					title: 'Starling',
					price: 10,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'retail-bank-account',
			title: 'Retail Bank Account',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '025',
					title: 'HSBC',
					price: 10,
					requires: [],
					disabled: true
				},
				{
					id: '026',
					title: 'Lloyds-TSB',
					price: 10,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'national-insurance-number',
			title: 'National Insurance Number',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '027',
					title: 'Option 1',
					price: 10,
					requires: [],
					disabled: true
				},
				{
					id: '028',
					title: 'Option 2',
					price: 10,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'mail-holding',
			title: 'Mail Holding',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '029',
					title: '2 months',
					price: 10,
					requires: ['e-bank-account','retail-bank-account','national-insurance-number'],
					disabled: true
				},
				{
					id: '030',
					title: '6 months',
					price: 10,
					requires: ['e-bank-account','retail-bank-account','national-insurance-number'],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: true
		},
		{
			id: 'job-board-access',
			title: 'Job Board Access',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '031',
					title: 'Job Board Access',
					price: 10,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'uk-sim-card',
			title: 'UK Sim Card',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '032',
					title: 'Sim + £10 credit',
					price: 10,
					requires: [],
					disabled: true
				},
				{
					id: '033',
					title: 'Sim + £20 credit',
					price: 10,
					requires: [],
					disabled: true
				},
				{
					id: '034',
					title: 'Sim + £30 credit',
					price: 10,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'oyster-card',
			title: 'Oyster Card',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '035',
					title: 'Oyster + £10 credit',
					price: 20,
					requires: [],
					disabled: true
				},
				{
					id: '036',
					title: 'Oyster + £20 credit',
					price: 30,
					requires: [],
					disabled: true
				},
				{
					id: '037',
					title: 'Oyster + £30 credit',
					price: 40,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'sim-oyster-postage',
			title: 'Sim + Oyster Postage',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '038',
					title: 'Collect from Base',
					price: 0,
					requires: ['oyster-card', 'uk-sim-card'],
					disabled: true
				},
				{
					id: '039',
					title: 'UK postage',
					price: 10,
					requires: ['oyster-card', 'uk-sim-card'],
					disabled: true
				},
				{
					id: '040',
					title: 'International',
					price: 25,
					requires: ['oyster-card', 'uk-sim-card'],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'arrival-orientation',
			title: 'Arrival Orientation',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '041',
					title: 'Group orientation',
					price: 5,
					requires: [],
					disabled: true
				},
				{
					id: '042',
					title: 'One-to-one',
					price: 25,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'pre-departure-phonecall',
			title: 'Pre-departure phonecall',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '043',
					title: 'Pre-departure phonecall',
					price: 5,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'cv-writing-assistance',
			title: 'CV-writing Assistance',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '044',
					title: 'Option 1',
					price: 25,
					requires: [],
					disabled: true
				},
				{
					id: '045',
					title: 'Option 2',
					price: 50,
					requires: [],
					disabled: true
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
	],

	'socials': [
		{
			id: 'social-events-membership',
			title: 'Social Events membership',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/side/doritos-single.70751d635cca78ab7771d06c0c6f3108.1.jpg?width=300',
			purchasables: [
				{
					id: '013',
					title: '3 months',
					price: 35,
					requires: [],
					disabled: false
				},
				{
					id: '014',
					title: '6 months',
					price: 65,
					requires: [],
					disabled: false
				},
				{
					id: '015',
					title: '1 year',
					price: 125,
					requires: [],
					disabled: false
				},
				{
					id: '016',
					title: '2 years',
					price: 200,
					requires: [],
					disabled: false
				}
			],
      width: 'large',
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'social-event-1',
			title: 'Social Event 1',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/side/chicken-strips-spicy.78f006b7376b6749d56de88f228e7517.1.jpg?width=300',
			purchasables: [
				{
					id: '017',
					title: 'Member price',
					price: 5,
					requires: ['social-events-membership'],
					disabled: true
				},
				{
					id: '017',
					title: 'Non-member price',
					price: 5,
					requires: [],
					disabled: false
				},
			],
      width: 'default',
      hasMemberPrice: true,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'social-event-2',
			title: 'Social Event 2',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/side/chicken-strips-spicy.78f006b7376b6749d56de88f228e7517.1.jpg?width=300',
			purchasables: [
				{
					id: '018',
					title: 'Member price',
					price: 5,
					requires: ['social-events-membership'],
					disabled: true
				},
				{
					id: '019',
					title: 'Non-member price',
					price: 5,
					requires: [],
					disabled: false
				},
			],
      width: 'default',
      hasMemberPrice: true,
      isInCart: false,
      wholeProductDisabled: false
		}
		
	],

	'tours': [
		{
			id: 'tour-1',
			title: 'Tour 1',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '020',
					title: 'Tour 1',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'tour-2',
			title: 'Tour 2',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '021',
					title: 'Tour 2',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'tour-3',
			title: 'Tour 3',
			description: "Description...",
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '022',
					title: 'Tour 3',
					price: 10,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		}
	]
});

export const productsService = {

	subscribe: products.subscribe,

	toggleIsInCart: (id) => {

		products.update(productsList => {

			// Our products list is not a simple list.
			// It's several objects containing lists of specific product types.
			for (var productType in productsList) {
				const items = productsList[productType];
				const itemToToggle = items.find(product => product.id === id);
				if (itemToToggle) {
					itemToToggle.isInCart = !itemToToggle.isInCart;
					const itemIndex = items.findIndex(product=> product.id === id);
					items[itemIndex] = itemToToggle;
					productsList[productType] = items;
				}
				productsList[productType] = items;
			}
			return productsList;

		})
	},

	toggleIsDisabled: (id, requiredItemInCart) => {

		products.update(productsList => {

			for (var productType in productsList) {
				const items = productsList[productType];
        
        		// Loop through each product in the product type's list.
				items.forEach( (item) => {

          			item.wholeProductDisabled = true;

					const productIndex = items.findIndex(product=> product.id === item.id);
					for (var key in item.purchasables) {
					  var purchasable = item.purchasables[key];
						var requiredProducts = purchasable.requires;
						if (requiredProducts.length && requiredProducts.indexOf(id) !== -1) {
							purchasable.disabled = !requiredItemInCart;
							item.purchasables[key] = purchasable;
            }
            if (!purchasable.disabled)  item.wholeProductDisabled = false;			    
          }
          
					items[productIndex] = item;

				});

        productsList[productType] = items;
        
			}
			return productsList;

		});

	},

}