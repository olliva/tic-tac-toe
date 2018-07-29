import * as React from "react";
import { Link } from "react-router-dom";

import { BreadcrumbsItem, BreadcrumbsStateless } from "@atlaskit/breadcrumbs";
import PageHeader from "@atlaskit/page-header";

class ErrorPage extends React.Component<{}> {
  public render() {
    const link = () => <Link to="/">Main Page</Link>;
    const breadcrumbs = (
      <BreadcrumbsStateless>
        <BreadcrumbsItem component={link} />
      </BreadcrumbsStateless>
    );

    return (
      <div>
        <PageHeader breadcrumbs={breadcrumbs}>404 Not Found</PageHeader>
      </div>
    );
  }
}

export default ErrorPage;
