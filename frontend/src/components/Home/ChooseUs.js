import { faLeaf, faLiraSign, faMedal, faMoneyBillAlt, faSoap, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import '../../App.css';

const service = [
	{
		src: <FontAwesomeIcon icon={faTruck} /> ,
		name: 'Free Pickup & Delivery ',
		title: 'Antar dan jemput cucian Anda didepan rumah anda, tepat waktu dan segar seperti bunga aster.'
	},
	{
		src: <FontAwesomeIcon icon={faSoap} /> ,
		name: 'Hygienic',
		title: 'Pakaian Anda dicuci secara higienis sehingga bebas kuman dan bersih. The way you think about laundry!.'
	},
	{
		src: <FontAwesomeIcon icon={faLiraSign} /> ,
		name: 'Affordable',
		title: 'Tanpa Biaya Tambahan! Anda membayar sama seperti harga yang ditetapkan dan yang terlihat.'
	},
	{
		src: <FontAwesomeIcon icon={faLeaf} /> ,
		name: 'Eco Friendly',
		title: 'Penduduk setempat menyukai layanan binatu & dry cleaning kami yang andal untuk hasil yang cepat, akurat, dan berkualitas tinggi tanpa limbah.'
	},
	{
		src: <FontAwesomeIcon icon={faMedal} /> ,
		name: 'Quality Guarantee',
		title: 'Kami profesional dalam bisnis laundry, yang berarti kami selalu up to date pada teknologi terbaru dan selalu memberika yang terbaik.'
	},
	{
		src: <FontAwesomeIcon icon={faMoneyBillAlt} /> ,
		name: 'Transparent Pricing',
		title: 'Dengan harga terjangkau layanan kami dalam anggaran yang sama atau kurang dari layanan binatu lokal lainnya di dekat Anda.'
	}
];

const ChooseUs = () => {
    return (
        <section className="mb-3" id="ChooseUs">
        <Container>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="text-primary head-title">Why Choose Us</h2>
            </div>
            <Row>
                {service.map(item => 
                    <Col md={4} className="d-flex justify-content-center mt-4" key={item.name}>
                        <Card style={{ width: '20rem' }}>
                            <CardHeader className="text-center mt-2 text-primary"><span className="icon-size">
                            {item.src}
                            </span></CardHeader>
                            <CardBody>
                                <CardTitle tag="h4" >{item.name}</CardTitle>
                                <CardText className="text-secondary">{item.title}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    </section>
    );
};

export default ChooseUs;