"use client";
import { Drawer } from "vaul";
export default function Home() {
  return (
    <div>
      <Drawer.Root>
        <Drawer.Trigger>Lihat Komentar</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
            <div className="p-4 bg-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum maxime molestiae libero est ullam quod consectetur aspernatur in inventore? Doloribus veniam ipsa dolore temporibus cupiditate similique quo architecto ex iste.
              Vero ipsam quasi qui, veniam perferendis, sunt tempore ab voluptate officiis molestiae eligendi non eum! Quia, nulla eum ut a nesciunt recusandae voluptatem aut numquam ex voluptates porro expedita consequuntur.
              Hic, in nisi. Cumque a veritatis asperiores sit officia minima placeat esse voluptas! Quis ipsum ab reiciendis tempore, ea laudantium facere ad deleniti minima ducimus? Perferendis eveniet et nemo quidem.
              Fugit accusamus doloribus rem dolorum delectus! Nulla, excepturi fuga explicabo repellat, culpa velit rem harum totam eius cupiditate quod magni eveniet deleniti obcaecati incidunt omnis ex et, enim accusamus sequi.
              Voluptatem architecto, ea illo doloribus dignissimos quibusdam sint, possimus esse velit ad, ipsam voluptas quidem quam nobis? Tempora, nesciunt. Consequuntur, voluptatem error. Commodi ex aperiam quod assumenda cumque in nesciunt!
              Culpa soluta mollitia quaerat quibusdam accusantium? Nostrum, dolor enim reiciendis nihil nisi rerum maiores natus repellat obcaecati debitis, modi exercitationem placeat velit assumenda et ad voluptatem quaerat minima. Ipsa, officiis.
              Consequatur ullam quia facere nostrum incidunt nihil culpa hic sapiente provident rem, nobis obcaecati id dolor, numquam itaque voluptas vitae labore. Voluptas magni architecto ipsam quae. Earum reprehenderit sed eligendi!
              Et animi accusamus suscipit doloremque aut recusandae fugit explicabo qui aliquam delectus. Velit officiis quisquam voluptatibus eaque prntium voluptates quos, exercitationem officiis. Repellat, reprehenderit minima.
              Tempore labore eveniet repellat tempora sint sapiente veniam illum, nam aliquid corrupti molestiae accusantium omnis dolore dolorem architecto. Officiis numquam molestias laboriosam sunt quod, exercitationem saepe itaque at voluptates blanditiis.
              Autem iste sapiente quisquam magni, error dignissimos? Provident, perferendis excepturi illum, laboriosam molestias enim ipsam dolores facere dignissimos recusandae corrupti ipsum, commodi quisquam molestiae eos. Temporibus dicta tempore alias cum!
              Deleniti aspernatur quidem incidunt velit hic, doloremque sed reprehenderit perferendis quaerat omnis earum. Tempora, animi quibusdam nostrum quam magnam dolorum distinctio voluptatem, nisi repellat voluptas quia enim. Iste, nam repudiandae!
              Laborum molestiae distinctio, impedit, ea ut ducimus mollitia numquam, omnis libero modi consequatur. Laborum, labore omnis. Atque nihil, reiciendis at rerum natus sed fuga eveniet in, eos omnis voluptatem quaerat!
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
