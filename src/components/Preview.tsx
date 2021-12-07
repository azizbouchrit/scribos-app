import {useBarcode} from "react-barcodes";
import barCodeBg from "../assets/images/bar-code-bg.png";
import "./Preview.css";

type PreviewProps = {
  exchange: boolean;
  designation: string;
  reference: number;
  quantity: number;
  country: string;
  date: string;
};

const Preview = (props: PreviewProps) => {
  const { inputRef } = useBarcode({
    value: props.reference.toString(),
    options: {
      displayValue: false,
    }
  });
  
  return (
    <div className='preview-container'>
      <div className='preview'>
        <img src={barCodeBg} className='preview__bg' alt='preview background' />

        {props.exchange && (
          <div className='exchange'>Exchange Standart, exchange part</div>
        )}
        <div className='designation'>{props.designation}</div>
        <div className="bar-code">
        <canvas ref={inputRef} />
        </div>
        <div className='reference'>{isNaN(props.reference) ? "" : props.reference}</div>
        <div className='quantity'>{isNaN(props.quantity) ? "" : props.quantity}</div>
        <div className='country'>{props.country}</div>
        <div className='date'>{props.date}</div>
      </div>
    </div>
  );
};

export default Preview;
