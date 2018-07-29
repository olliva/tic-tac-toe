import * as React from "react";
import { Link } from "react-router-dom";

import { BreadcrumbsItem, BreadcrumbsStateless } from "@atlaskit/breadcrumbs";
import PageHeader from "@atlaskit/page-header";

class BoardPage extends React.Component<IBoardComponent> {
  public render() {
    const link = () => <Link to="/">Main Page</Link>;
    const breadcrumbs = (
      <BreadcrumbsStateless>
        <BreadcrumbsItem component={link} />
      </BreadcrumbsStateless>
    );

    return (
      <div>
        <PageHeader breadcrumbs={breadcrumbs}>
          {this.props.board.name}
        </PageHeader>
      </div>
    );
  }
}

export default BoardPage;

interface IBoardComponent {
  board: IBoard;
}

interface IBoard {
  number: number;
  name: string;
}
