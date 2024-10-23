import image from '@/assets/pikaso_edit.png'
  
export function MyHeader() {
    return (
        <header className='flex items-center'>
            <img className='w-52 h-52' src={image.src} alt="" />
            <h1>LOGO</h1>
        </header>
    );
}
