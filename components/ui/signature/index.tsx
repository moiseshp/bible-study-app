import Text from '@/components/ui/text';

const Signature = () => {
  return (
    <Text>
      {new Date().getFullYear()} &copy; Creado por {''}
      {/* <a
        href="https://x.com/moiseseduardohp"
        target="_blank"
        className="font-bold"
      > */}
      moiseshp
      {/* </a> */}
    </Text>
  );
};

export default Signature;
