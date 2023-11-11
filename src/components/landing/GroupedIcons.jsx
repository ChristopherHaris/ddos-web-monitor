import BlueIcon from "./BlueIcon";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import { Telescope } from "@styled-icons/ionicons-solid/Telescope";
import { ChalkboardUser } from "@styled-icons/fa-solid/ChalkboardUser";
import { Gift } from "@styled-icons/boxicons-regular/Gift";
import { PersonAdd } from "@styled-icons/evaicons-solid/PersonAdd";
import { School } from "@styled-icons/fa-solid/School";
import { RadioOutline } from "@styled-icons/evaicons-outline/RadioOutline";
import { Separator } from "@/components/ui/separator";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Adjust the duration as needed
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function GroupedIcons() {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      {isSmallScreen ? (
        <>
        <motion.div
          className={`flex flex-col justify-between items-center max-w-[75%] w-full mx-auto h-auto`}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.div
            className="flex flex-col justify-evenly items-center w-full mt-2"
            variants={textVariants}
          >
            {[
              { icon: Telescope, title: "RESEARCH", text: "Sampling sampah rumah tangga dan sampling sampah di pesisir" },
              { icon: Gift, title: "AKSI SEDEKAH SAMPAH", text: "Aksi Kecil Sejuta Manfaat. Mengumpulkan donasi sampah untuk dikonversi menjadi berbagai program pemberdayaan" },
              { icon: School, title: "SELINGKUH (SEKOLAH LINGKUNGAN HIDUP)", text: "Edukasi dan pendampingan pengelolaan ke sekolah-sekolah" },
              { icon: ChalkboardUser, title: "WORKSHOP", text: "Pelatihan pengelolaan sampah untuk meningkatkan skill komunitas/lembaga/kelompok yang sudah eksis" },
              { icon: PersonAdd, title: "PEMBERDAYAAN MASYARAKAT", text: "Menyelesaikan permasalahan sampah sekaligus peningkatan ekonomi masyarakat" },
              { icon: RadioOutline, title: "DDOROCARE TALK'S", text: "Ngobrol seputar inspirasi dalam pengolahan sampah" },
            ].map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={index}
                variants={iconVariants}
                className={`flex flex-col items-center space-y-5 w-full my-5`}
              >
                <BlueIcon icon={Icon} iconSize={35} />
                <h1 className="font-bold text-base md:text-lg text-center">{title}</h1>
                <p className="font-medium text-sm md:text-base text-center whitespace-normal">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Separator
          orientation="horizontal"
          className="max-w-[75%] mx-auto my-11"
        />
      </>
      ) : (
        <>
          <motion.div
            className="flex flex-col justify-between items-center h-[500px] max-w-[75%] w-full mx-auto"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.div
              className="flex flex-row justify-evenly w-full h-full mt-2"
              variants={textVariants}
            >
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center space-y-5 w-[300px]"
              >
                <BlueIcon icon={Telescope} iconSize={35} />
                <h1 className="font-bold text-center">RESEARCH</h1>
                <p className="font-medium text-center whitespace-normal">
                  Sampling sampah rumah tangga dan sampling sampah di pesisir
                </p>
              </motion.div>
              <Separator orientation="vertical" />
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center space-y-5 w-[300px]"
              >
                <BlueIcon icon={Gift} iconSize={35} />
                <h1 className="font-bold text-center">AKSI SEDEKAH SAMPAH</h1>
                <p className="font-medium text-center">
                  Aksi Kecil Sejuta Manfaat. Mengumpulkan donasi sampah untuk
                  dikonversi menjadi berbagai program pemberdayaan
                </p>
              </motion.div>
              <Separator orientation="vertical" />
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center space-y-5 w-[300px]"
              >
                <BlueIcon icon={School} iconSize={35} />
                <h1 className="font-bold text-center">
                  SELINGKUH (SEKOLAH LINGKUNGAN HIDUP)
                </h1>
                <p className="font-medium text-center">
                  Edukasi dan pendampingan pengelolaan ke sekolah-sekolah
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-row justify-evenly w-full h-[50%]"
              variants={textVariants}
            >
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center space-y-5 w-[300px]"
              >
                <BlueIcon icon={ChalkboardUser} iconSize={35} />
                <h1 className="font-bold text-center">WORKSHOP</h1>
                <p className="font-medium text-center">
                  Pelatihan pengelolaan sampah untuk meningkatkan skill
                  komunitas/lembaga/kelompok yang sudah eksis
                </p>
              </motion.div>
              <Separator orientation="vertical" />
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center space-y-5 w-[300px]"
              >
                <BlueIcon icon={PersonAdd} iconSize={35} />
                <h1 className="font-bold text-center">
                  PEMBERDAYAAN MASYARAKAT
                </h1>
                <p className="font-medium text-center">
                  Menyelesaikan permasalahan sampah sekaligus peningkatan
                  ekonomi masyarakat
                </p>
              </motion.div>
              <Separator orientation="vertical" />
              <motion.div
                variants={iconVariants}
                className="flex flex-col items-center space-y-5 w-[300px]"
              >
                <BlueIcon icon={RadioOutline} iconSize={35} />
                <h1 className="font-bold text-center">DDOROCARE TALK{"'"}S</h1>
                <p className="font-medium text-center">
                  Ngobrol seputar inspirasi dalam pengolahan sampah
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <Separator
            orientation="horizontal"
            className="max-w-[75%] mx-auto my-11"
          />
        </>
      )}
    </div>
  );
}

export default GroupedIcons;
