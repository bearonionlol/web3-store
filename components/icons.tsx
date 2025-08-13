import React from 'react';

export const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.09-.828l2.918-9.524a.75.75 0 00-.282-.828l-12.016-5.007a.75.75 0 00-.917.112l-2.028 2.748M7.5 14.25L5.106 5.165m0 0a.75.75 0 01.112-.917l2.028-2.748a.75.75 0 01.917-.112l12.016 5.007a.75.75 0 01.282.828l-2.918 9.524a1.06 1.06 0 01-1.09.828H7.5M7.5 14.25h.008v.008H7.5v-.008z" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

export const SolanaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
        <title>Solana</title>
        <path d="M5.13 6.338c-.144.406.012.86.419 1.004l2.766.977a.747.747 0 01.55.713v7.26a.75.75 0 01-1.32.42l-2.66-4.606a.75.75 0 00-1.08-.25L1.47 13.59a.747.747 0 00-.418 1.004l3.998 11.28c.145.406.59.64.997.495l2.766-.976a.75.75 0 01.55.713v-7.26a.75.75 0 011.32-.42l2.66 4.607a.75.75 0 001.08.25l2.336-1.76a.75.75 0 00.419-1.004L9.41-1.332c-.144-.406-.59-.64-.997-.495L5.645-1.03a.75.75 0 01-.55-.713v7.26a.75.75 0 01-1.32.42l-2.66-4.607a.75.75 0 00-1.08-.25L-2.336-1.76a.75.75 0 00-.419 1.004Z" transform="translate(4.5 2)"/>
    </svg>
);


export const UsdcLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13.858,15.025h-1.633 c-0.345,1.248-1.503,1.69-2.925,1.69c-1.28,0-2.348-0.345-2.925-0.978c-0.577-0.632-0.69-1.503-0.518-2.588 c0.23-1.446,1.28-2.348,3.155-3.04c2.012-0.748,2.793-1.28,2.793-2.183c0-0.748-0.632-1.28-1.84-1.28c-1.149,0-1.84,0.46-2.07,1.446h-1.633c0.115-1.9,1.633-2.845,3.705-2.845c2.07,0,3.45,0.92,3.45,2.645c0,0.978-0.577,1.69-1.503,2.23 c-0.92,0.518-2.348,1.035-3.1,1.336c-1.28,0.518-1.84,1.035-1.725,1.84c0.057,0.518,0.577,0.805,1.222,0.805 c1.035,0,1.633-0.345,1.9-1.28h1.633C15.195,13.623,14.663,14.503,13.858,15.025z" />
  </svg>
);


export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.3-2.3L12.75 18l1.178-.398a3.375 3.375 0 002.3-2.3L16.5 14.25l.398 1.178a3.375 3.375 0 002.3 2.3l1.178.398-1.178.398a3.375 3.375 0 00-2.3 2.3z" />
  </svg>
);

export const SpinnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 9H3m16.635 2.365l-2.122 2.122m-11.314-11.314l2.122 2.122m11.314 0l-2.122-2.122m-11.314 11.314l2.122-2.122" />
  </svg>
);

export const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.032-6.968l-1.06-1.06M20.496 20.496l-1.06-1.06m-15.032 0l1.06-1.06m13.912-13.912l1.06 1.06M12 21v-1.5m0-15V3" />
  </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const PencilIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);
