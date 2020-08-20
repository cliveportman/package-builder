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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Summary',
					body: "<p>The Tier 5 Youth Mobility Visa is by far the most popular choice for those without UK Ancestry. It will give you two years to live, work and travel in the UK but it's a once in a lifetime visa, you can’t do it again! This visa will give you the right to live and work in the whole of the UK which includes (England, Scotland, Wales and Northern Ireland). Whilst you are in the UK you can also take advantage of being on the doorstep to Europe, where you have access to 21 countries that you can travel to within a two hour flight!</p>"
				},
				{
					heading: 'Qualification Criteria',
					body: "<p>To be able to proceed with the visa application service through BritBound, the following applies.<ul>	<li><strong>Nationality:</strong> You must be a Commonwealth national (have a passport), for one of the following countries: Australia, Canada, New Zealand.</li><li><strong>Age:</strong> You must be over 18 when you arrive in the UK and under 31 when you apply for the visa.</li><li><strong>Criminal Record:</strong> You cannot have any registered offences, that have been issued at a court of Law in the past 12 months.</li><li><strong>Proof of Funds:</strong> You must have no less than the equivalent of £1890 to support yourself when you first arrive in the UK</li><li><strong>Dependent Children:</strong> You cannot have any children who are dependent on you.</li><li><strong>Government Visa Fees:</strong> You must be able to pay the additional Government Entry Clearance Fee of (£244) and the International Health Surcharge (£600) that gives you free access to GPs, hospitals and subsidised dentistry.</li><li><strong>Previous UK Visas:</strong> You cannot have been to the United Kingdom as a working holidaymaker or under the youth mobility scheme. Tourist visits are fine.</li></ul><p>Please contact us if you need to discuss any of the above.</p>"
				},
				{
					heading: 'The Detail',
					body: "<p>Applying for a visa, especially a big one like the Tier 5 Youth Mobility, can be a stressful experience. With so much riding on the outcome it is no wonder that it is often said to be the least enjoyable aspect of moving to the UK. They say around 30% of visa applications get rejected, which would be a costly situation to be in, more visa fees, flight changes, tour cancellations...</p><p>BritBound is here to guarantee a successful outcome, because we want you to make it over here without any delays! More importantly, we want you to look forward to receiving your passport back, not dreading it, because lets face it, there is nothing more exciting than finding out your visa application to move to another country was successful!</p><p>We have been assisting with visa applications for more than 10 years, and that is a lot of applications, thousands in fact! So our service has a great track record, otherwise we would not be winning the awards! But heres a short summary of our process...and there are NO paper application forms!</p><ol><li>After joining BritBound and selecting the Visa Service you will answer some criteria to ensure you qualify for the visa. (see next tab for a list of the qualifying criteria!)</li><li>Once you pass this you can then complete a series of tabs requesting information relevant to your visa.</li><li>Our team will then liaise with you to determine the best date to start your visa, taking into consideration any other travel plans.</li><li>We will then create your online submission ready for the British High Commission to review.</li><li>Our visa team will ensure your visa is processed within 4 weeks, or 7 days if you are choosing the priority processing option.</li><li>Our visas consultants will complete your visa application for you, check all your supporting documents and only submit when everything is in order. Spare yourself the ‘Will I, won’t I get it’ stress and let us ensure your application goes through first time around. Furthermore we offer a ‘No Visa No Fee’ Promise – so if you don’t get your visa we’ll refund your BritBound fee.</li></ol><p>Please note that this fee does not include the UK Government's Entry Clearance Fee or the International Health Surcharge which is payable directly to the British High Commission once your application is complete and ready to submit.</p>"
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '023',
					title: 'Monese',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '024',
					title: 'Starling',
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
			id: 'retail-bank-account',
			title: 'Retail Bank Account',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '025',
					title: 'HSBC',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '026',
					title: 'Lloyds-TSB',
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
			id: 'national-insurance-number',
			title: 'National Insurance Number',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '027',
					title: 'Option 1',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '028',
					title: 'Option 2',
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
			id: 'mail-holding',
			title: 'Mail Holding',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '031',
					title: 'Job Board Access',
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
			id: 'uk-sim-card',
			title: 'UK Sim Card',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '032',
					title: 'Sim + £10 credit',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '033',
					title: 'Sim + £20 credit',
					price: 10,
					requires: [],
					disabled: false
				},
				{
					id: '034',
					title: 'Sim + £30 credit',
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
			id: 'oyster-card',
			title: 'Oyster Card',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '041',
					title: 'Group orientation',
					price: 5,
					requires: [],
					disabled: false
				},
				{
					id: '042',
					title: 'One-to-one',
					price: 25,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'pre-departure-phonecall',
			title: 'Pre-departure phonecall',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '043',
					title: 'Pre-departure phonecall',
					price: 5,
					requires: [],
					disabled: false
				}
      ],
      hasMemberPrice: false,
      isInCart: false,
      wholeProductDisabled: false
		},
		{
			id: 'cv-writing-assistance',
			title: 'CV-writing Assistance',
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
			imageUrl: 'https://api.pizzahut.io/v1/content/images/pizza/veg-sizzler.9080ab76751bc8af8209d7bd28b76160.1.jpg?width=300',
			purchasables: [
				{
					id: '044',
					title: 'Option 1',
					price: 25,
					requires: [],
					disabled: false
				},
				{
					id: '045',
					title: 'Option 2',
					price: 50,
					requires: [],
					disabled: false
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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
			oneLiner: 'Very short, one line summary',
			description: [
				{
					heading: 'Heading 1',
					body: '<p>Body text...</p>'
				},
				{
					heading: 'Heading 2',
					body: '<p>Body text...</p>'
				}
			],
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

		console.log(id);

		products.update(productsList => {

			// Loop through the product types.
			for (var productType in productsList) {
        
        		// Loop through each product in the product type's list of products.
				const items = productsList[productType];
				items.forEach( (item) => {

					// Disable each item by default.
          			item.wholeProductDisabled = true;

					const productIndex = items.findIndex(product=> product.id === item.id);

					for (var key in item.purchasables) {

					  	var purchasable = item.purchasables[key];
						var requiredProducts = purchasable.requires;

						// If th purchasable contains a required product and one of the 
						// required products matches the id, we enable the product.
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