import { useParams } from 'react-router-dom';

const ProductDetail = () => {
	const params = useParams(); // Will return key/value pairs of the dynamic segments of the url
	// In this instance, we're only using one: ':productId' (from '<Route path='/product-detail/:productId'>' in App.js)
	// So if the URL is 'my-domain.com/product-detail/monkey'
	// Then 'params' will be '{ productId: 'monkey' }
	// However, the URL can have multiple 'dynamic segments', so for example, if we update the route in App.js to '<Route path='/product-detail/:productId/:anotherId/:somethingElse'>'
	// Then access the url 'my-domain.com/product-detail/monkey/table/tool'
	// 'params' will be '{ productId: 'monkey', anotherId: 'table', somethingElse: 'tool' }'

	return (
		<section>
			<h1>Product Detail</h1>
			<p>{params.productId}</p>
		</section>
	);
};

export default ProductDetail;
